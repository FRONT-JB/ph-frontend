import { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: ReactNode;
  isActive?: boolean;
}

const Button = ({ type = 'button', isActive = false, buttonText, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled type={type} isActive={isActive} {...rest}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button<{ isActive: boolean }>`
  display: inline-block;
  padding: 10px 14px;
  width: auto;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => ` ${theme.colors.zinc_300}`};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.colors.zinc_900};
  font-size: 12px;
  outline: 4px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;

  &:active {
    outline-color: ${({ theme }) => theme.colors.zinc_300};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.zinc_300};
    border-color: ${({ theme }) => theme.colors.zinc_300};
    outline-color: transparent;
    color: ${({ theme }) => theme.colors.zinc_100};
    box-shadow: none;
  }
  ${({ theme, isActive }) =>
    isActive
      ? css`
          background-color: ${theme.colors.zinc_800};
          border-color: ${theme.colors.zinc_800};
          color: ${theme.colors.white};
          font-weight: 700;
        `
      : ''}
`;
