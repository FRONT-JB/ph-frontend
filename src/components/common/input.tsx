import { forwardRef, InputHTMLAttributes, memo, ReactNode } from 'react';
import styled from '@emotion/styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', id, labelText, ...rest }, ref) => {
    return (
      <InputWrapper>
        {Boolean(labelText) && <LabelStyled htmlFor={id}>{labelText}</LabelStyled>}
        <InputStyled ref={ref} type={type} id={id} {...rest} />
      </InputWrapper>
    );
  }
);

export default memo(Input);

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.zinc_400};
  cursor: pointer;
`;

export const InputStyled = styled.input`
  display: inline-block;
  padding: 10px 14px;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => ` ${theme.colors.zinc_300}`};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.colors.zinc_900};
  font-size: 14px;
  outline: 4px solid transparent;
  transition: all 0.3s ease-in;
  &:focus {
    outline-color: ${({ theme }) => theme.colors.zinc_100};
  }
  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.zinc_300};
  }
`;
