import { Suspense, useMemo } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { Button, DetailRepository } from '../components';
import { FilterConstants, RoutePathConstants, SearchParamsConstants } from '../constants';
import { useRepositoryValueContext } from '../provider';
import { ContainerStyled, EmptyStyled } from '../styles';

const Detail = () => {
  const { favorit } = useRepositoryValueContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsObject = Object.fromEntries(searchParams.entries());
  const repoName = searchParams.get(SearchParamsConstants.RepositoryName) || '';
  const issueSize = parseInt(searchParams.get(SearchParamsConstants.IssueSize) || '', 10) || 0;
  const page = parseInt(searchParams.get(SearchParamsConstants.Page) || '', 10) || 1;
  const limit = parseInt(searchParams.get(SearchParamsConstants.Limit) || '', 10) || 10;
  const paginationSize = useMemo(() => Math.ceil(issueSize / limit), [issueSize, limit]);

  const isEmptyFavorit = useMemo(() => {
    const found = favorit.find((repo) => repo.full_name === repoName);
    return !found || !favorit.length;
  }, [favorit]);

  const handleChangePage = (pageNumber: number) => {
    setSearchParams({ ...paramsObject, page: String(pageNumber) });
  };

  const handleChangeLimit = (limitNumber: number) => {
    setSearchParams({
      ...paramsObject,
      page: String(FilterConstants.InitialPageNumber),
      limit: String(limitNumber),
    });
  };

  if (isEmptyFavorit) return <Navigate to={RoutePathConstants.Root} />;

  return (
    <ContainerStyled>
      <DetailFilterStyled>
        <Button
          buttonText="10개씩 보기"
          isActive={Number(paramsObject.limit) === 10}
          onClick={() => handleChangeLimit(10)}
        />
        <Button
          buttonText="20개씩 보기"
          isActive={Number(paramsObject.limit) === 20}
          onClick={() => handleChangeLimit(20)}
          disabled={issueSize <= 20}
        />
        <Button
          buttonText="50개씩 보기"
          isActive={Number(paramsObject.limit) === 50}
          onClick={() => handleChangeLimit(50)}
          disabled={issueSize <= 20}
        />
      </DetailFilterStyled>
      <Suspense fallback={<EmptyStyled>...loading</EmptyStyled>}>
        <DetailRepository repoName={repoName} page={page} limit={limit} />
      </Suspense>
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
    </ContainerStyled>
  );
};

export default Detail;

const DetailFilterStyled = styled.div`
  display: flex;
  gap: 8px;
`;

const DetailPaginationStyled = styled.div`
  overflow-x: scroll;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 4px;
  padding: 5px 0;
  margin: 0 auto;
  max-width: 100%;
`;

const DetailPaginationButton = styled(Button)`
  padding: 4px;
  min-width: 30px;
  font-size: 12px;
  height: 30px;
`;
