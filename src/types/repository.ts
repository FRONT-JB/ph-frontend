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
  watchers: number;
}

interface RepositoryResponse {
  incomplete_results: boolean;
  items: RepositoryType[];
  total_count: number;
}

export type { OwnerType, RepositoryResponse, RepositoryType };
