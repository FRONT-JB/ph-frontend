import { memo, useMemo } from 'react';
import {
  useRepositoryDispatchContext,
  useRepositoryValueContext,
} from '@/provider/repository-provider';
import { ContainerStyled, EmptyStyled } from '@/styles/utils';
import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

import { Card } from '../card';
import { Button } from '../common';

const FavoritRepository = () => {
  const navigate = useNavigate();
  const { favorit } = useRepositoryValueContext();
  const { handleChangeFavoritRepository } = useRepositoryDispatchContext();

  const isEmpty = useMemo(() => !favorit.length, [favorit]);

  if (isEmpty) return <FavoritEmpty>저장된 데이터가 없습니다.</FavoritEmpty>;

  return (
    <FavoritContainer>
      <Card
        list={favorit}
        render={(item) => (
          <FavoritCardItem
            key={item.full_name}
            onClick={() => {
              navigate({
                pathname: `/detail`,
                search: `?repoName=${item.full_name}&maxSize=${item.open_issues}`,
              });
            }}
          >
            <FavoritCardItemHeader>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <strong style={{ display: 'block' }}>{item.full_name}</strong>
                <p>Issues : {item.open_issues}</p>
                <p>Star : {item.stargazers_count}</p>
              </div>
              <Button
                buttonText="del"
                onClick={(e) => {
                  e.stopPropagation();
                  handleChangeFavoritRepository(item);
                }}
              />
            </FavoritCardItemHeader>
            <FavoritCardItemBody>{item.description}</FavoritCardItemBody>
          </FavoritCardItem>
        )}
      />
    </FavoritContainer>
  );
};

export default FavoritRepository;

const FavoritContainer = styled(ContainerStyled)`
  overflow-y: auto;
  flex: 1;
  padding: 10px;
  height: 100%;
  max-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.zinc_300};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const FavoritEmpty = styled(EmptyStyled)`
  flex: 1;
  padding: 10px;
`;

const FavoritCardItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 0;
  cursor: pointer;
  &:not(:first-of-type) {
    border-top: 1px solid ${({ theme }) => theme.colors.zinc_200};
  }
`;

const FavoritCardItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FavoritCardItemBody = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.zinc_600};
  line-height: 23px;
`;
