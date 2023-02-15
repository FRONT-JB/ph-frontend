import axios from 'axios';

import { API_BASE_URL, GITHUB_AUTH_TOKEN } from '../constants';
import { RepositoryResponse, RepositoryType } from '../types';

const baseApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/vnd.github.nightshade-preview+json',
    Authorization: `Token ${GITHUB_AUTH_TOKEN}`,
  },
});

const HTTP = {
  getRepository: async (searchTerm: string) => {
    const url = `/search/repositories?q=${searchTerm}`;
    const { data } = await baseApi.get<RepositoryResponse>(url);
    return data;
  },
  getIssues: async (repoName: RepositoryType['full_name']) => {
    const url = `/repos/${repoName}/issues`;
    const { data } = await baseApi.get<any>(url);
    return data;
  },
};

export default HTTP;