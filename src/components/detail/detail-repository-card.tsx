import { DescriptionStyled, TitleStyled } from '@/styles';
import { IssueType } from '@/types';

import { CardItemStyled } from '../card';

interface DetailRepositoryCardProps {
  issue: IssueType;
}

const DetailRepositoryCard = ({ issue }: DetailRepositoryCardProps) => {
  const { state, title, body } = issue;

  return (
    <CardItemStyled>
      <div>
        <span>{state}</span>
        <TitleStyled>{title}</TitleStyled>
      </div>
      <DescriptionStyled>{body || '설명글이 없는 이슈에요.'}</DescriptionStyled>
    </CardItemStyled>
  );
};

export default DetailRepositoryCard;
