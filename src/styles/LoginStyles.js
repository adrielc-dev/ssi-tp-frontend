import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f4f9;
  padding: 24px;
`;

export const LoginCard = styled.div`
  background: #ffffff;
  border-radius: 28px;
  padding: 48px 40px 36px;
  width: 100%;
  max-width: 448px;
  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.15),
              0 4px 8px 3px rgba(60, 64, 67, 0.1);
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 1.5s;

  @media (max-width: 480px) {
    padding: 36px 24px 28px;
    border-radius: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Title = styled.h1`
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #202124;
  text-align: center;
  margin: 16px 0 4px;
  letter-spacing: -0.2px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #5f6368;
  text-align: center;
  margin-bottom: 32px;
  font-weight: 400;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 16px;
  top: ${({ $hasValue, $isFocused }) => ($hasValue || $isFocused ? '-8px' : '16px')};
  font-size: ${({ $hasValue, $isFocused }) => ($hasValue || $isFocused ? '12px' : '16px')};
  color: ${({ $isFocused, $hasError }) =>
    $hasError ? '#d93025' : $isFocused ? '#1a73e8' : '#5f6368'};
  background: #fff;
  padding: 0 4px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  font-weight: 400;
  z-index: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#d93025' : '#dadce0')};
  border-radius: 8px;
  outline: none;
  color: #202124;
  background: transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  caret-color: #1a73e8;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#d93025' : '#1a73e8')};
    border-width: 2px;
    padding: 15px;
    box-shadow: none;
  }

  &::placeholder {
    color: transparent;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #d93025;
  font-size: 12px;
  margin-top: 4px;
  padding-left: 16px;
  min-height: 16px;
`;

export const ForgotLink = styled.div`
  text-align: left;
  margin-bottom: 32px;
  margin-top: -8px;

  a {
    font-size: 14px;
    font-weight: 500;
    color: #1a73e8;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: rgba(26, 115, 232, 0.04);
      border-radius: 4px;
      padding: 4px 8px;
      margin: -4px -8px;
    }
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const CreateAccountLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #1a73e8;
  cursor: pointer;
  padding: 8px 8px;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(26, 115, 232, 0.04);
    text-decoration: none;
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

export const SubmitButton = styled.button`
  background: #1a73e8;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Google Sans', 'Roboto', sans-serif;
  cursor: pointer;
  letter-spacing: 0.25px;
  transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
  min-width: 90px;

  &:hover {
    background: #1765cc;
    box-shadow: 0 1px 3px 1px rgba(66, 133, 244, 0.3);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background: #1a73e8;
    animation: ${pulse} 1.5s ease-in-out infinite;
    cursor: not-allowed;
  }
`;

export const InfoText = styled.p`
  font-size: 12px;
  color: #5f6368;
  text-align: center;
  margin-top: 32px;
  line-height: 1.6;
  padding-top: 20px;
  border-top: 1px solid #e8eaed;

  a {
    color: #1a73e8;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #5f6368;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(95, 99, 104, 0.08);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
