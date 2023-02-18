import { useIssuesQuery } from '@/api/queries';
import RoutePath from '@/constants/route-path';
import { ContentStyled } from '@/styles/utils';
import { IssueParamsType } from '@/types/issue';
import styled from '@emotion/styled';

import { Navigate } from 'react-router-dom';

interface DetailRepositoryProps {
  repoName: IssueParamsType['repoName'];
  page: IssueParamsType['page'];
  limit: IssueParamsType['limit'];
}

const DetailRepository = ({ repoName, page, limit }: DetailRepositoryProps) => {
  const { data: issues, error } = useIssuesQuery(
    { repoName, page, limit },
    {
      enabled: Boolean(repoName),
      suspense: true,
      notifyOnChangeProps: 'tracked',
    }
  );

  if (!repoName) {
    return <Navigate to={RoutePath.Root} />;
  }

  if (error) {
    return <p>에러가 발생했어요.</p>;
  }

  return (
    <DetailRepositoryContent>
      {issues?.map(({ id }) => (
        <p key={id}>{id}</p>
      ))}
    </DetailRepositoryContent>
  );
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
