import styled from '@emotion/styled';

import { TitleStyled } from '@/styles';
import { IssueType } from '@/types';

import { Card, CardItemStyled } from '../card';
import { Icons } from '../common';

interface DetailRepositoryCardProps {
  issue: IssueType;
}

const DetailRepositoryCard = ({ issue }: DetailRepositoryCardProps) => {
  const { title, body, created_at, number } = issue;

  return (
    <DetailRepositoryCardItem>
      <TitleStyled>
        <Icons.Title />
        {number}. {title}
      </TitleStyled>
      <Card.Date type="create" date={created_at} />
      <Card.Description description={body || '설명글이 없는 이슈에요.'} />
    </DetailRepositoryCardItem>
  );
};

export const DetailRepositoryCardItem = styled(CardItemStyled)`
  flex-direction: column;
`;

export default DetailRepositoryCard;
