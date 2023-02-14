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
  padding: 10px 14px;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => ` ${theme.colors.zinc_300}`};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.colors.zinc_900};
  font-size: 14px;
`;
