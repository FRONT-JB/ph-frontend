import { useMemo } from 'react';
import styled from '@emotion/styled';

import { useIssuesInfinityQuery } from '@/api';
import { ContentStyled, EmptyStyled } from '@/styles';
import { IssueParamsType } from '@/types';

import { Card } from '../card';
import { Loader, LoadMore, NotFound } from '../common';

import DetailRepositoryCard from './detail-repository-card';

interface DetailRepositoryProps extends Pick<IssueParamsType, 'repoName'> {}

const DetailRepository = ({ repoName }: DetailRepositoryProps) => {
  const {
    data: issues,
    isFetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    error,
  } = useIssuesInfinityQuery({ repoName });
  const isNotFound = useMemo(() => !repoName, [repoName]);
  const isEmpty = useMemo(() => !issues?.pages[0].length, [issues]);

  const statusMessage = useMemo(() => {
    if (isEmpty) return '이슈가 없어요.';
    if (error) return '에러가 발생했어요.';
    return '이슈가 없어요.';
  }, [isEmpty, error]);

  if (isLoading)
    return (
      <EmptyStyled>
        <Loader />
      </EmptyStyled>
    );

  if (isNotFound) {
    return <NotFound />;
  }

  if (isEmpty || error) {
    return <EmptyStyled>{statusMessage}</EmptyStyled>;
  }

  return (
    <DetailRepositoryContent>
      <Card
        list={issues?.pages}
        render={(issueList) =>
          issueList.map((issue) => <DetailRepositoryCard key={issue.id} issue={issue} />)
        }
      />
      <LoadMore isFetching={isFetching} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
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
