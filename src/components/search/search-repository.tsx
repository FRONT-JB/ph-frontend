import { useMemo } from 'react';
import styled from '@emotion/styled';

import { useRepositoryInfinityQuery } from '@/api';
import { useRepositoryContext } from '@/provider';
import { ContentStyled, EmptyStyled } from '@/styles';

import { Card } from '../card';
import { Loader, LoadMore } from '../common';

import SearchRepositoryCard from './search-repository-card';

const SearchRepository = () => {
  const { debounceSearchValue, handleChangeFavoritRepository } = useRepositoryContext();
  const {
    data: searchResult,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
  } = useRepositoryInfinityQuery(debounceSearchValue);

  const isEmpty = useMemo(() => !searchResult?.pages[0].items.length, [searchResult?.pages]);

  const statusMessage = useMemo(() => {
    if (isError) return '에러가 발생했어요.';
    if (isEmpty) return '검색 결과가 없습니다.';
    return '';
  }, [isEmpty, isError]);

  if (isLoading)
    return (
      <EmptyStyled>
        <Loader />
      </EmptyStyled>
    );

  if (!debounceSearchValue) return <EmptyStyled>상단의 인풋에 키워드를 입력해주세요.</EmptyStyled>;

  if (statusMessage) return <EmptyStyled>{statusMessage}</EmptyStyled>;

  return (
    <SearchRepositoryContent>
      <Card
        list={searchResult?.pages}
        render={(item) =>
          item.items.map((repository) => (
            <SearchRepositoryCard
              key={repository.id}
              item={repository}
              onChangeFavoritRepository={handleChangeFavoritRepository}
            />
          ))
        }
      />
      <LoadMore isFetching={isFetching} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
    </SearchRepositoryContent>
  );
};

export default SearchRepository;

const SearchRepositoryContent = styled(ContentStyled)`
  overflow-y: auto;
  padding: 10px;
  max-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.zinc_300};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
