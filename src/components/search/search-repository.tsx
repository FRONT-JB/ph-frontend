import { useMemo } from 'react';
import styled from '@emotion/styled';

import { useRepositoryQuery } from '@/api';
import { useRepositoryDispatchContext, useRepositoryValueContext } from '@/provider';
import { ContentStyled, EmptyStyled } from '@/styles';

import { Card } from '../card';

import SearchRepositoryCard from './search-repository-card';

const SearchRepository = () => {
  const { debounceSearchValue } = useRepositoryValueContext();
  const { handleChangeFavoritRepository } = useRepositoryDispatchContext();
  const { data: searchResult } = useRepositoryQuery(debounceSearchValue, {
    enabled: Boolean(debounceSearchValue),
    suspense: true,
  });
  const isEmpty = useMemo(() => !searchResult?.items.length, [searchResult?.items]);

  if (isEmpty && !debounceSearchValue)
    return <EmptyStyled>상단의 인풋에 키워드를 입력해주세요.</EmptyStyled>;

  if (isEmpty) return <EmptyStyled>검색 결과가 없습니다.</EmptyStyled>;

  return (
    <SearchRepositoryContent>
      <Card
        list={searchResult?.items}
        render={(item) => (
          <SearchRepositoryCard
            key={item.id}
            item={item}
            onChangeFavoritRepository={handleChangeFavoritRepository}
          />
        )}
      />
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
