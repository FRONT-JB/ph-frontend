import { Input, SearchRepository } from '@/components';
import { useRepositoryContext } from '@/provider';
import { ContainerStyled } from '@/styles';

const Main = () => {
  const { handleChangeSearchValue, searchValue } = useRepositoryContext();

  return (
    <ContainerStyled>
      <Input
        value={searchValue}
        onChange={handleChangeSearchValue}
        placeholder="키워드를 입력해주세요."
      />
      <SearchRepository />
    </ContainerStyled>
  );
};

export default Main;
