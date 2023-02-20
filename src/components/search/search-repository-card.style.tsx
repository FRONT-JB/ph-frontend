import styled from '@emotion/styled';

import { DescriptionStyled, fontEllipsis, TitleStyled } from '@/styles';

export const SearchRepositoryCardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SearchRepositoryCardTitleStyled = styled(TitleStyled)`
  ${fontEllipsis(2)}
  width: 100%;
`;

export const SearchRepositoryCardDescStyled = styled(DescriptionStyled)`
  ${fontEllipsis(1)}
  width: 100%;
`;
