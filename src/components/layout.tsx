import styled from '@emotion/styled';

import { Outlet } from 'react-router-dom';

import { Header } from './header';

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 10px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.fieldSize.sm};
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
