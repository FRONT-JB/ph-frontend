import { RepositoryType } from './repository';
import { UserType } from './user';

export interface IssueParamsType {
  repoName: RepositoryType['full_name'];
  page: number;
  limit: number;
}

export interface IssueType {
  repository_url: string;
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: UserType;
  state: string;
  locked: boolean;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  draft: boolean;
  body: string | null;
  performed_via_github_app: null;
  state_reason: null;
}
