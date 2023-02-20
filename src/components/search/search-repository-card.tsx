import styled from '@emotion/styled';

import { DescriptionStyled } from '@/styles';
import { RepositoryType } from '@/types';

import { CardItemImageStyled, CardItemStyled } from '../card';
import { Button, Dot } from '../common';

import { SearchRepositoryCardTitleStyled } from './search-repository-card.style';

interface SearchRepositoryCardProps {
  item: RepositoryType;
  onChangeFavoritRepository: (repostiory: RepositoryType) => void;
}

const SearchRepositoryCard = ({ item, onChangeFavoritRepository }: SearchRepositoryCardProps) => {
  const { owner, full_name, language } = item;

  return (
    <CardItemStyled>
      <CardItemImageStyled>
        <img
          src={owner.avatar_url}
          alt={`${owner.login} Thunbnail`}
          title={`${owner.login} Thunbnail`}
        />
      </CardItemImageStyled>
      <SearchRepositoryCardItemBody>
        <SearchRepositoryCardTitleStyled>{full_name}</SearchRepositoryCardTitleStyled>
        {language && (
          <DescriptionStyled>
            <Dot language={language} />
            {language}
          </DescriptionStyled>
        )}
      </SearchRepositoryCardItemBody>
      <Button buttonText="add" onClick={() => onChangeFavoritRepository(item)} />
    </CardItemStyled>
  );
};

export default SearchRepositoryCard;

const SearchRepositoryCardItemBody = styled.div`
  flex: 1;
`;
