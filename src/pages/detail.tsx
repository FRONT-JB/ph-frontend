import { Suspense } from 'react';
import { DetailRepository } from '@/components/detail';

import { ContainerStyled } from '../styles';

const Detail = () => {
  return (
    <ContainerStyled>
      <Suspense fallback="...loading">
        <DetailRepository />
      </Suspense>
    </ContainerStyled>
  );
};

export default Detail;
