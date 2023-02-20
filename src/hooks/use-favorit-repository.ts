import { useCallback, useMemo } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { FilterConstants, RoutePathConstants } from '@/constants';
import { useRepositoryContext } from '@/provider';
import { RepositoryType } from '@/types';

const useFavoritRepository = () => {
  const navigate = useNavigate();
  const { favorit, handleChangeFavoritRepository } = useRepositoryContext();

  const isEmpty = useMemo(() => !favorit.length, [favorit]);

  const handleRouteDetail = useCallback((repository: RepositoryType) => {
    const { full_name: repoName, open_issues } = repository;
    navigate({
      pathname: RoutePathConstants.Detail,
      search: `?${createSearchParams({
        repoName,
        page: String(FilterConstants.InitialPage),
        limit: String(FilterConstants.InitialLimit),
        issueSize: String(open_issues),
      })}`,
    });
  }, []);

  return {
    favorit,
    isEmpty,
    handleRouteDetail,
    handleChangeFavoritRepository,
  };
};

export default useFavoritRepository;
