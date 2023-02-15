import QueryKeys from '@/constants/query-key';

import { AxiosResponse } from 'axios';
import { QueryKey, useQuery, UseQueryOptions as DefaultUseQueryOptions } from 'react-query';

import { RepositoryResponse, RepositoryType } from '../types';

import HTTP from './base';

type UseQueryOptions<T> =
  | Omit<
      DefaultUseQueryOptions<unknown, unknown, AxiosResponse<T>['data'], QueryKey>,
      'queryKey' | 'queryFn'
    >
  | undefined;

const useRepositoryQuery = (searchTerm: string, options?: UseQueryOptions<RepositoryResponse>) => {
  return useQuery(
    [QueryKeys.Repository, searchTerm],
    () => HTTP.getRepository(searchTerm),
    options
  );
};

const useIssuesQuery = (repoName: RepositoryType['full_name'], options?: UseQueryOptions<any>) => {
  return useQuery([QueryKeys.Issues, repoName], () => HTTP.getIssues(repoName), options);
};

export { useIssuesQuery, useRepositoryQuery };
