import { useInfiniteQuery } from 'react-query';

import { QueryKeysConstants } from '@/constants';

import { IssueParamsType, IssueType, RepositoryResponse } from '../types';

import HTTP from './base';

const useRepositoryInfinityQuery = (searchValue: string) => {
  return useInfiniteQuery<RepositoryResponse>(
    [QueryKeysConstants.Repository, searchValue],
    ({ pageParam = 1 }) => HTTP.getRepository({ searchValue, page: pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage && lastPage.items.length < 10) {
          return undefined;
        }
        return pages.length + 1;
      },
      enabled: Boolean(searchValue),
    }
  );
};

const useIssuesInfinityQuery = (params: Omit<IssueParamsType, 'page'>) => {
  const { repoName } = params;
  return useInfiniteQuery<IssueType[]>(
    [QueryKeysConstants.Issues, params],
    ({ pageParam = 1 }) => HTTP.getIssues({ repoName, page: pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage && lastPage.length < 30) {
          return undefined;
        }
        return pages.length + 1;
      },
      enabled: Boolean(repoName),
    }
  );
};

export { useIssuesInfinityQuery, useRepositoryInfinityQuery };
