import { useMemo } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { useRepositoryContext } from '@/provider';

import { DetailRepository } from '../components';
import { RoutePathConstants, SearchParamsConstants } from '../constants';
import { ContainerStyled, TitleStyled } from '../styles';

const Detail = () => {
  const { favorit } = useRepositoryContext();
  const [searchParams] = useSearchParams();
  const repoName = searchParams.get(SearchParamsConstants.RepositoryName) as string;
  const issueSize = parseInt(searchParams.get(SearchParamsConstants.IssueSize) as string, 10) || 0;

  const isEmptyFavorit = useMemo(() => {
    const found = favorit.find((repo) => repo.full_name === repoName);
    return !found || !favorit.length;
  }, [favorit]);

  if (isEmptyFavorit) return <Navigate to={RoutePathConstants.Root} />;

  return (
    <ContainerStyled>
      <TitleStyled>
        {repoName} - 총 {issueSize}개의 이슈
      </TitleStyled>
      <DetailRepository repoName={repoName} />
    </ContainerStyled>
  );
};

export default Detail;
