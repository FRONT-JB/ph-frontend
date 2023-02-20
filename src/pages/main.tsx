import { Suspense } from 'react';
import styled from '@emotion/styled';

import { Input, Loader, SearchRepository } from '@/components';
import { useRepositoryContext } from '@/provider';
import { ContainerStyled, ContentStyled } from '@/styles';

const Main = () => {
  const { handleChangeSearchValue } = useRepositoryContext();

  return (
    <ContainerStyled>
      <Input onChange={handleChangeSearchValue} placeholder="키워드를 입력해주세요." />
      <MainContent>
        <Suspense fallback={<Loader />}>
          <SearchRepository />
        </Suspense>
      </MainContent>
    </ContainerStyled>
  );
};

export default Main;

const MainContent = styled(ContentStyled)`
  max-height: calc(100% - 50px);
`;
