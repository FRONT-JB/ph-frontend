import styled from '@emotion/styled';

import { TitleStyled } from '@/styles';
import { IssueType } from '@/types';

import { Card, CardItemStyled } from '../card';
import { Icons } from '../common';

interface DetailRepositoryCardProps {
  issue: IssueType;
}

const DetailRepositoryCard = ({ issue }: DetailRepositoryCardProps) => {
  const { title, body, created_at, number, comments, user, html_url } = issue;

  const handleOpenWindow = () => {
    if (window.confirm('이슈로 이동하시겠어요?')) {
      window.open(html_url);
    }
    return;
  };

  return (
    <DetailRepositoryCardItem onClick={handleOpenWindow}>
      <TitleStyled>
        <Icons.Title />
        {number}. {title}
      </TitleStyled>
      <Card.Date date={created_at} />
      <Card.User name={user.login} />
      <Card.Comment count={comments} />
      <Card.Description description={body || '설명글이 없는 이슈에요.'} />
    </DetailRepositoryCardItem>
  );
};

export const DetailRepositoryCardItem = styled(CardItemStyled)`
  flex-direction: column;
  gap: 4px;
`;

export default DetailRepositoryCard;
