import { useMemo } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { FilterConstants, RoutePathConstants } from '@/constants';
import { useRepositoryDispatchContext, useRepositoryValueContext } from '@/provider';
import { RepositoryType } from '@/types';

import { Card } from '../card';
import { Button } from '../common';

import {
  FavoritCardItemBodyStyled,
  FavoritCardItemHeaderStyled,
  FavoritCardItemStyled,
  FavoritContainerStyled,
  FavoritEmptyStyled,
} from './favorit-repository.style';

const FavoritRepository = () => {
  const navigate = useNavigate();
  const { favorit } = useRepositoryValueContext();
  const { handleChangeFavoritRepository } = useRepositoryDispatchContext();

  const isEmpty = useMemo(() => !favorit.length, [favorit]);

  if (isEmpty) return <FavoritEmptyStyled>저장된 데이터가 없습니다.</FavoritEmptyStyled>;

  const handleRouteDetail = (repository: RepositoryType) => {
    const { full_name: repoName, open_issues } = repository;
    navigate({
      pathname: RoutePathConstants.Detail,
      search: `?${createSearchParams({
        repoName,
        page: String(FilterConstants.InitialPageNumber),
        limit: String(FilterConstants.InitialLimitNumber),
        issueSize: String(open_issues),
      })}`,
    });
  };

  return (
    <FavoritContainerStyled>
      <Card
        list={favorit}
        render={(item) => (
          <FavoritCardItemStyled key={item.full_name} onClick={() => handleRouteDetail(item)}>
            <FavoritCardItemHeaderStyled>
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
            </FavoritCardItemHeaderStyled>
            <FavoritCardItemBodyStyled>{item.description}</FavoritCardItemBodyStyled>
          </FavoritCardItemStyled>
        )}
      />
    </FavoritContainerStyled>
  );
};

export default FavoritRepository;
