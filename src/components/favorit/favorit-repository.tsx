import { useMemo } from 'react';
import {
  useRepositoryDispatchContext,
  useRepositoryValueContext,
} from '@/provider/repository-provider';

import { useNavigate } from 'react-router-dom';

import { Card } from '../card';
import { Button } from '../common';

import {
  FavoritCardItem,
  FavoritCardItemBody,
  FavoritCardItemHeader,
  FavoritContainer,
  FavoritEmpty,
} from './favorit-repository.style';

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
                search: `?repoName=${item.full_name}&page=1&limit=10&maxSize=${item.open_issues}`,
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
