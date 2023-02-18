import { RepositoryType } from '@/types/repository';

import { CardItem, CardItemImage } from '../card';

import {
  SearchRepositoryCardItemButton,
  SearchRepositoryCardItemDesc,
  SearchRepositoryCardItemName,
  SearchRepositoryCardItemOwner,
} from './search-repository-card.style';

interface SearchRepositoryCardProps {
  item: RepositoryType;
  onChangeFavoritRepository: (repostiory: RepositoryType) => void;
}

const SearchRepositoryCard = ({ item, onChangeFavoritRepository }: SearchRepositoryCardProps) => {
  const { owner, open_issues } = item;

  return (
    <CardItem>
      <CardItemImage>
        <img src={owner.avatar_url} alt={`${owner.login} Thunbnail`} />
      </CardItemImage>
      <SearchRepositoryCardItemDesc>
        <SearchRepositoryCardItemOwner>{owner.login}</SearchRepositoryCardItemOwner>
        <SearchRepositoryCardItemName>{open_issues}</SearchRepositoryCardItemName>
      </SearchRepositoryCardItemDesc>
      <SearchRepositoryCardItemButton
        buttonText="add"
        onClick={() => onChangeFavoritRepository(item)}
      />
    </CardItem>
  );
};

export default SearchRepositoryCard;
