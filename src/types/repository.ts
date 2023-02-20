import { LanguageType } from '@/styles/theme';

interface RepositoryParamsType {
  searchValue: string;
  page: number;
}
interface OwnerType {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

interface RepositoryType {
  id: number;
  owner: OwnerType;
  open_issues: number;
  stargazers_count: number;
  forks: number;
  full_name: string;
  watchers: number;
  description: string;
  language: LanguageType;
  visibility: string;
  created_at: Date;
  updated_at: Date;
}

interface RepositoryResponse {
  incomplete_results: boolean;
  items: RepositoryType[];
  total_count: number;
}

export type { OwnerType, RepositoryParamsType, RepositoryResponse, RepositoryType };
