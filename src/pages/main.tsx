import { Suspense } from 'react';
import styled from '@emotion/styled';

import { Input, SearchRepository } from '@/components';
import { useRepositoryDispatchContext } from '@/provider';
import { ContainerStyled, ContentStyled, EmptyStyled } from '@/styles';

const Main = () => {
  const { handleChangeSearchValue } = useRepositoryDispatchContext();

  return (
    <ContainerStyled>
      <Input onChange={handleChangeSearchValue} placeholder="키워드를 입력해주세요." />
      <MainContent>
        <Suspense fallback={<EmptyStyled>...loading</EmptyStyled>}>
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
