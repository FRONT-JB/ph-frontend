import styled from '@emotion/styled';

import { Outlet } from 'react-router-dom';

import { Header } from './Header';

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
  padding: 10px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.fieldSize.sm};
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
