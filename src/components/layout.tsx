import { Suspense } from 'react';
import styled from '@emotion/styled';

import { Outlet } from 'react-router-dom';

import { ContainerStyled } from '../styles';

import { FavoritRepository } from './favorit';
import { Header } from './header';

const Layout = () => {
  return (
    <LayoutStyled>
      <LayoutContainer>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </LayoutContainer>
      <FavoritRepository />
    </LayoutStyled>
  );
};

export default Layout;

const LayoutContainer = styled(ContainerStyled)`
  flex: 1;
  max-height: 100%;
`;

const LayoutStyled = styled.div`
  overflow: hidden;
  display: flex;
  gap: 8px;
  padding: 10px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.fieldSize.lg};
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
