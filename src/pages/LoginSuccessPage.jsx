import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f4f9;
  padding: 24px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 28px;
  padding: 48px 40px 36px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.15),
              0 4px 8px 3px rgba(60, 64, 67, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const CheckCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #e8f5e9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;

  svg {
    width: 36px;
    height: 36px;
    fill: #2e7d32;
  }
`;

const Title = styled.h1`
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #202124;
  margin: 0 0 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #5f6368;
  margin: 0;
  line-height: 1.5;
`;

function LoginSuccessPage() {
  return (
    <Wrapper>
      <Card>
        <CheckCircle>
          <svg viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </CheckCircle>
        <Title>Inicio de sesión exitoso</Title>
        <Subtitle>
          Bienvenido a S-Code. Estaremos revisando tu postulación y te
          contactaremos a la brevedad.
        </Subtitle>
      </Card>
    </Wrapper>
  );
}

export default LoginSuccessPage;
