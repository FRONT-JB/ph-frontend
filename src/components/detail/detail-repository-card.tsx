import { TitleStyled } from '@/styles';
import { IssueType } from '@/types';

import { Card } from '../card';
import { Icons } from '../common';

import { DetailRepositoryCardItem, DetailRepositoryInfo } from './detail-repository-card.style';

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
      <DetailRepositoryInfo>
        <Card.Date type="create" date={created_at} />
      </DetailRepositoryInfo>
      <Card.Description description={body || '설명글이 없는 이슈에요.'} />
    </DetailRepositoryCardItem>
  );
};

export default DetailRepositoryCard;
