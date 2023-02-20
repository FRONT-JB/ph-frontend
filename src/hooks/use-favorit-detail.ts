import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FilterConstants, SearchParamsConstants } from '@/constants';
import { useRepositoryContext } from '@/provider';

const useFavoritDetail = () => {
  const { favorit } = useRepositoryContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const repoName = searchParams.get(SearchParamsConstants.RepositoryName) as string;
  const issueSize = parseInt(searchParams.get(SearchParamsConstants.IssueSize) as string, 10) || 0;
  const page = parseInt(searchParams.get(SearchParamsConstants.Page) as string, 10) || 1;
  const limit = parseInt(searchParams.get(SearchParamsConstants.Limit) as string, 10) || 10;

  const paginationSize = useMemo(() => Math.ceil(issueSize / limit), [issueSize, limit]);

  const isEmptyFavorit = useMemo(() => {
    const found = favorit.find((repo) => repo.full_name === repoName);
    return !found || !favorit.length;
  }, [favorit]);

  const handleChangePage = useCallback(
    (pageNumber: number) => {
      setSearchParams({ ...paramsObject, page: String(pageNumber) });
    },
    [paramsObject]
  );

  const handleChangeLimit = useCallback(
    (limitNumber: number) => {
      setSearchParams({
        ...paramsObject,
        page: String(FilterConstants.InitialPage),
        limit: String(limitNumber),
      });
    },
    [paramsObject]
  );

  return {
    repoName,
    page,
    limit,
    paginationSize,
    isEmptyFavorit,
    handleChangePage,
    handleChangeLimit,
  };
};

export default useFavoritDetail;
