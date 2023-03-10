import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

import { ContainerStyled } from '@/styles';

import { Loader } from '../common';
import { Header } from '../header';

const Layout = () => {
  return (
    <LayoutStyled>
      <LayoutContainer>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </LayoutContainer>
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
  max-width: ${({ theme }) => theme.fieldSize.sm};
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
