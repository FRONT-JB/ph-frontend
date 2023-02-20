import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { Button, DetailRepository, Loader } from '../components';
import { FilterLimitButtons, RoutePathConstants } from '../constants';
import { useFavoritDetail } from '../hooks';
import { ContainerStyled, EmptyStyled } from '../styles';

const Detail = () => {
  const {
    repoName,
    page,
    limit,
    paginationSize,
    isEmptyFavorit,
    handleChangePage,
    handleChangeLimit,
  } = useFavoritDetail();

  if (isEmptyFavorit) return <Navigate to={RoutePathConstants.Root} />;

  return (
    <ContainerStyled>
      <DetailFilterStyled>
        {FilterLimitButtons.map(({ id, text, value }) => (
          <Button
            key={id}
            buttonText={text}
            isActive={Number(limit) === value}
            onClick={() => handleChangeLimit(value)}
            disabled={!paginationSize}
          />
        ))}
      </DetailFilterStyled>
      <Suspense
        fallback={
          <EmptyStyled>
            <Loader />
          </EmptyStyled>
        }
      >
        <DetailRepository repoName={repoName} page={page} limit={limit} />
      </Suspense>
      {paginationSize ? (
        <DetailPaginationStyled>
          {Array(paginationSize)
            .fill(0)
            .map((_, index) => {
              return (
                <DetailPaginationButton
                  key={index}
                  buttonText={index + 1}
                  isActive={index + 1 === page}
                  onClick={() => handleChangePage(index + 1)}
                />
              );
            })}
        </DetailPaginationStyled>
      ) : null}
    </ContainerStyled>
  );
};

export default Detail;

const DetailFilterStyled = styled.div`
  display: flex;
  gap: 8px;
`;

const DetailPaginationStyled = styled.div`
  overflow-x: auto;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 4px;
  padding: 5px 0;
  margin: 0 auto;
  max-width: 325px;
`;

const DetailPaginationButton = styled(Button)`
  padding: 4px;
  min-width: 30px;
  font-size: 12px;
  height: 30px;
`;
