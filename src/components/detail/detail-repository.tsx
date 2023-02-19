import { useIssuesQuery } from '@/api/queries';
import { ContentStyled } from '@/styles';
import { IssueParamsType } from '@/types';
import styled from '@emotion/styled';

import { NotFound } from '../common';

interface DetailRepositoryProps extends IssueParamsType {}

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
    return <NotFound />;
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
