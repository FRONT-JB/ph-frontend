import useFavoritRepository from '@/hooks/use-favorit-repository';

import { Card } from '../card';

import { FavoritContainerStyled, FavoritEmptyStyled } from './favorit-repository.style';
import FavoritRepositoryCard from './favorit-repository-card';

const FavoritRepository = () => {
  const { favorit, isEmpty, handleRouteDetail, handleChangeFavoritRepository } =
    useFavoritRepository();

  if (isEmpty) return <FavoritEmptyStyled>저장된 데이터가 없습니다.</FavoritEmptyStyled>;

  return (
    <FavoritContainerStyled>
      <Card
        list={favorit}
        render={(item) => (
          <FavoritRepositoryCard
            key={item.full_name}
            item={item}
            onChangeFavoritRepository={handleChangeFavoritRepository}
            onRouteDetail={handleRouteDetail}
          />
        )}
      />
    </FavoritContainerStyled>
  );
};

export default FavoritRepository;
