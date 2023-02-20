import { RepositoryType } from '@/types';

import { Card, CardItemImageStyled, CardItemStyled } from '../card';
import { Button, Icons } from '../common';

import {
  SearchRepositoryCardBodyStyled,
  SearchRepositoryCardDescStyled,
  SearchRepositoryCardTitleStyled,
} from './search-repository-card.style';

interface SearchRepositoryCardProps {
  item: RepositoryType;
  onChangeFavoritRepository: (repostiory: RepositoryType) => void;
}

const SearchRepositoryCard = ({ item, onChangeFavoritRepository }: SearchRepositoryCardProps) => {
  const { owner, full_name, language, updated_at, description, open_issues } = item;

  return (
    <CardItemStyled>
      <CardItemImageStyled>
        <img
          src={owner.avatar_url}
          alt={`${owner.login} Thunbnail`}
          title={`${owner.login} Thunbnail`}
        />
      </CardItemImageStyled>
      <SearchRepositoryCardBodyStyled>
        <SearchRepositoryCardTitleStyled>{full_name}</SearchRepositoryCardTitleStyled>
        <Card.Date type="update" date={updated_at} />
        <Card.Issue count={open_issues} />
        {language && <Card.Language language={language} />}
        {description && (
          <SearchRepositoryCardDescStyled>
            <Icons.Description />
            {description}
          </SearchRepositoryCardDescStyled>
        )}
      </SearchRepositoryCardBodyStyled>
      <Button buttonText={<Icons.Bookmark />} onClick={() => onChangeFavoritRepository(item)} />
    </CardItemStyled>
  );
};

export default SearchRepositoryCard;
