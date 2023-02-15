import { useIssuesQuery } from '@/api/queries';
import RoutePath from '@/constants/route-path';
import { ContentStyled } from '@/styles/utils';
import styled from '@emotion/styled';

import { Navigate, useLocation } from 'react-router-dom';

const DetailRepository = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const repoName = searchParams.get('repoName') || '';
  const maxSize = parseInt(searchParams.get('maxSize') || '', 10) || 0;

  const { data, error } = useIssuesQuery(repoName, {
    enabled: Boolean(repoName),
    notifyOnChangeProps: 'tracked',
  });

  if (!repoName) {
    return <Navigate to={RoutePath.Root} />;
  }

  if (error) {
    return <p>에러가 발생했어요.</p>;
  }

  return <DetailRepositoryContent>Detail</DetailRepositoryContent>;
};

export default DetailRepository;

const DetailRepositoryContent = styled(ContentStyled)`
  overflow-y: auto;
  padding: 10px;
  max-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.zinc_300};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
