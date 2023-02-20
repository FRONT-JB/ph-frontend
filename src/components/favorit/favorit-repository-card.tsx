import styled from '@emotion/styled';

import { RepositoryType } from '@/types';

import { Card, CardItemStyled } from '../card';
import { Button, Icons } from '../common';

interface FavoritRepositoryCardProps {
  item: RepositoryType;
  onChangeFavoritRepository: (repostiory: RepositoryType) => void;
  onRouteDetail: (repository: RepositoryType) => void;
}

const FavoritRepositoryCard = ({
  item,
  onChangeFavoritRepository,
  onRouteDetail,
}: FavoritRepositoryCardProps) => {
  const {
    full_name,
    open_issues,
    stargazers_count,
    forks,
    description,
    updated_at,
    created_at,
    language,
  } = item;

  return (
    <CardItemStyled key={full_name} onClick={() => onRouteDetail(item)}>
      <FavoritCardItemBodyStyled>
        <Card.Title title={full_name} />
        <Card.Date type="create" date={created_at} />
        <Card.Date type="update" date={updated_at} />
        <Card.Issue count={open_issues} />
        <Card.Star count={stargazers_count} />
        <Card.Fork count={forks} />
        {language && <Card.Language language={language} />}
        {description && <Card.Description description={description} />}
      </FavoritCardItemBodyStyled>
      <Button
        buttonText={<Icons.BookmarkActive />}
        onClick={(e) => {
          e.stopPropagation();
          onChangeFavoritRepository(item);
        }}
      />
    </CardItemStyled>
  );
};

export const FavoritCardItemBodyStyled = styled.div`
  flex: 1;
`;

export default FavoritRepositoryCard;
