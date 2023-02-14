import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;

const LayoutStyled = styled.div`
  padding: 10px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.fieldSize.sm};
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
