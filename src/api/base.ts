import axios from 'axios';

import { API_BASE_URL, GITHUB_AUTH_TOKEN } from '@/constants';
import { IssueParamsType, IssueType, RepositoryResponse } from '@/types';

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
  getIssues: async (params: IssueParamsType) => {
    const { repoName, page, limit } = params;
    const url = `/repos/${repoName}/issues?page=${page}&per_page=${limit}`;
    const { data } = await baseApi.get<IssueType[]>(url);
    return data;
  },
};

export default HTTP;
