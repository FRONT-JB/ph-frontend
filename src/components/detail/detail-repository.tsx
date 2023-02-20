import { useMemo } from 'react';
import styled from '@emotion/styled';

import { useIssuesQuery } from '@/api';
import { ContentStyled, EmptyStyled } from '@/styles';
import { IssueParamsType } from '@/types';

import { Card } from '../card';
import { NotFound } from '../common';

import DetailRepositoryCard from './detail-repository-card';

interface DetailRepositoryProps extends IssueParamsType {}

const DetailRepository = ({ repoName, page, limit }: DetailRepositoryProps) => {
  const { data: issues, error } = useIssuesQuery(
    { repoName, page, limit },
    {
      enabled: Boolean(repoName),
      suspense: true,
    }
  );
  const isNotFound = useMemo(() => !repoName || !page || !limit, [repoName, page, limit]);
  const isEmpty = useMemo(() => !issues?.length, [issues]);

  const statusMessage = useMemo(() => {
    if (isEmpty) return '이슈가 없어요.';
    if (error) return '에러가 발생했어요.';
    return '이슈가 없어요.';
  }, [isEmpty, error]);

  if (isNotFound) {
    return <NotFound />;
  }

  if (isEmpty || error) {
    return <EmptyStyled>{statusMessage}</EmptyStyled>;
  }

  return (
    <DetailRepositoryContent>
      <Card
        list={issues}
        render={(issue) => <DetailRepositoryCard key={issue.id} issue={issue} />}
      />
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
