import { AxiosResponse } from 'axios';
import { QueryKey, useQuery, UseQueryOptions as DefaultUseQueryOptions } from 'react-query';

import { RepositoryResponse } from '../types';

import HTTP from './base';

type UseQueryOptions<T> =
  | Omit<
      DefaultUseQueryOptions<unknown, unknown, AxiosResponse<T>['data'], QueryKey>,
      'queryKey' | 'queryFn'
    >
  | undefined;

const useRepositoryQuery = (searchTerm: string, options?: UseQueryOptions<RepositoryResponse>) => {
  return useQuery(['repos', searchTerm], () => HTTP.getRepository(searchTerm), options);
};

export { useRepositoryQuery };
