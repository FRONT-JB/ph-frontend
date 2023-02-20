import { RepositoryType } from './repository';
import { UserType } from './user';

interface IssueParamsType {
  repoName: RepositoryType['full_name'];
  page: number;
  limit: number;
}

interface IssueType {
  repository_url: string;
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: UserType;
  state: string;
  locked: boolean;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  draft: boolean;
  body: string | null;
  performed_via_github_app: null;
  state_reason: null;
}

export type { IssueParamsType, IssueType };
