import { useCallback, useMemo } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { RoutePathConstants } from '@/constants';
import { useRepositoryContext } from '@/provider';
import { RepositoryType } from '@/types';

import { Card } from '../card';

import { FavoritContainerStyled, FavoritEmptyStyled } from './favorit-repository.style';
import FavoritRepositoryCard from './favorit-repository-card';

const FavoritRepository = () => {
  const navigate = useNavigate();
  const { favorit, handleChangeFavoritRepository } = useRepositoryContext();

  const isEmpty = useMemo(() => !favorit.length, [favorit]);

  const handleRouteDetail = useCallback((repository: RepositoryType) => {
    const { full_name: repoName, open_issues } = repository;
    navigate({
      pathname: RoutePathConstants.Detail,
      search: `?${createSearchParams({
        repoName,
        issueSize: String(open_issues),
      })}`,
    });
  }, []);

  if (isEmpty) return <FavoritEmptyStyled>저장된 데이터가 없습니다.</FavoritEmptyStyled>;

  return (
    <FavoritContainerStyled>
      <Card
        list={favorit}
        render={(item) => (
          <FavoritRepositoryCard
            key={item.full_name}
            item={item}
            onChangeFavoritRepository={handleChangeFavoritRepository}
            onRouteDetail={handleRouteDetail}
          />
        )}
      />
    </FavoritContainerStyled>
  );
};

export default FavoritRepository;
