import { Suspense, useMemo } from 'react';
import { DetailRepository } from '@/components/detail';
import FilterConstants from '@/constants/filter';
import RoutePathConstants from '@/constants/route-path';
import styled from '@emotion/styled';

import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../components';
import { ContainerStyled, EmptyStyled } from '../styles';

const Detail = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const paramsObject = Object.fromEntries(searchParams.entries());
  const repoName = searchParams.get('repoName') || '';
  const issueSize = parseInt(searchParams.get('issueSize') || '', 10) || 0;
  const page = parseInt(searchParams.get('page') || '', 10) || 1;
  const limit = parseInt(searchParams.get('limit') || '', 10) || 10;
  const paginationSize = useMemo(() => Math.ceil(issueSize / limit), [issueSize, limit]);

  const handleChangePage = (pageNumber: number) => {
    navigate({
      pathname: RoutePathConstants.Detail,
      search: `?${createSearchParams({ ...paramsObject, page: String(pageNumber) })}`,
    });
  };

  const handleChangeLimit = (limitNumber: number) => {
    navigate({
      pathname: RoutePathConstants.Detail,
      search: `?${createSearchParams({
        ...paramsObject,
        page: String(FilterConstants.InitialPageNumber),
        limit: String(limitNumber),
      })}`,
    });
  };

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
          .map((_, index) => (
            <DetailPaginationButton
              key={index}
              buttonText={index + 1}
              isActive={index + 1 === page}
              onClick={() => handleChangePage(index + 1)}
            />
          ))}
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
  align-items: center;
  gap: 4px;
  margin: 0 auto;
  max-width: 600px;
  flex: 0 0 auto;
  padding: 5px 0;
`;

const DetailPaginationButton = styled(Button)`
  padding: 4px;
  min-width: 30px;
  font-size: 12px;
  height: 30px;
`;
