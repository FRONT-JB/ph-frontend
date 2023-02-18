import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: ReactNode;
}

const Button = ({ type = 'button', buttonText, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled type={type} {...rest}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  display: inline-block;
  padding: 10px 14px;
  width: auto;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => ` ${theme.colors.zinc_300}`};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.colors.zinc_900};
  font-size: 14px;
  outline: 4px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  &:active {
    outline-color: ${({ theme }) => theme.colors.zinc_200};
  }
`;
