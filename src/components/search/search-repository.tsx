import { useMemo } from 'react';
import { useRepositoryQuery } from '@/api/queries';
import {
  useRepositoryDispatchContext,
  useRepositoryValueContext,
} from '@/provider/repository-provider';
import { ContentStyled, EmptyStyled } from '@/styles/utils';
import styled from '@emotion/styled';

import { Card } from '../card';
import { Button } from '../common';

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
          <SearchRepositoryCardItem key={item.id}>
            <SearchRepositoryCardItemImage>
              <img src={item.owner.avatar_url} alt={`${item.owner.login} Thunbnail`} />
            </SearchRepositoryCardItemImage>
            <SearchRepositoryCardItemDesc>
              <SearchRepositoryCardItemOwner>{item.owner.login}</SearchRepositoryCardItemOwner>
              <SearchRepositoryCardItemName>{item.open_issues}</SearchRepositoryCardItemName>
            </SearchRepositoryCardItemDesc>
            <SearchREpositoryCardItemButton
              buttonText="add"
              onClick={() => handleChangeFavoritRepository(item)}
            />
          </SearchRepositoryCardItem>
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

const SearchRepositoryCardItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
`;

const SearchRepositoryCardItemImage = styled.span`
  overflow: hidden;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  & > img {
    display: inline-block;
    width: 100%;
  }
`;

const SearchRepositoryCardItemDesc = styled.div`
  flex: 1;
`;

const SearchRepositoryCardItemName = styled.p`
  user-select: none;
`;

const SearchRepositoryCardItemOwner = styled.p`
  user-select: none;
`;

const SearchREpositoryCardItemButton = styled(Button)``;
