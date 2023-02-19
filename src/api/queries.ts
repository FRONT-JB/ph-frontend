import { AxiosResponse } from 'axios';
import { QueryKey, useQuery, UseQueryOptions as DefaultUseQueryOptions } from 'react-query';

import { QueryKeysConstants } from '@/constants';

import { IssueParamsType, IssueType, RepositoryResponse } from '../types';

import HTTP from './base';

type UseQueryOptions<T> =
  | Omit<
      DefaultUseQueryOptions<unknown, unknown, AxiosResponse<T>['data'], QueryKey>,
      'queryKey' | 'queryFn'
    >
  | undefined;

const useRepositoryQuery = (searchTerm: string, options?: UseQueryOptions<RepositoryResponse>) => {
  return useQuery(
    [QueryKeysConstants.Repository, searchTerm],
    () => HTTP.getRepository(searchTerm),
    options
  );
};

const useIssuesQuery = (params: IssueParamsType, options?: UseQueryOptions<IssueType[]>) => {
  return useQuery([QueryKeysConstants.Issues, params], () => HTTP.getIssues(params), options);
};

export { useIssuesQuery, useRepositoryQuery };
