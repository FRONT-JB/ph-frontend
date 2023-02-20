import { DescriptionStyled, TitleStyled } from '@/styles';
import { RepositoryType } from '@/types';

import { Button } from '../common';

import { FavoritCardItemBodyStyled, FavoritCardItemStyled } from './favorit-repository-card.style';

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
  return (
    <FavoritCardItemStyled key={item.full_name} onClick={() => onRouteDetail(item)}>
      <FavoritCardItemBodyStyled>
        <TitleStyled>{item.full_name}</TitleStyled>
        <DescriptionStyled>Issues : {item.open_issues}</DescriptionStyled>
        <DescriptionStyled>Star : {item.stargazers_count}</DescriptionStyled>
        {item.description && <DescriptionStyled>{item.description}</DescriptionStyled>}
      </FavoritCardItemBodyStyled>
      <Button
        buttonText="del"
        onClick={(e) => {
          e.stopPropagation();
          onChangeFavoritRepository(item);
        }}
      />
    </FavoritCardItemStyled>
  );
};

export default FavoritRepositoryCard;
