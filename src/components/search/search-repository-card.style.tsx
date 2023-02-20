import styled from '@emotion/styled';

import { fontEllipsis, TitleStyled } from '@/styles';

export const SearchRepositoryCardBodyStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchRepositoryCardTitleStyled = styled(TitleStyled)`
  ${fontEllipsis(2)}
  width: 100%;
`;
