import styled from '@emotion/styled';

import { ContainerStyled, EmptyStyled } from '@/styles';

export const FavoritContainerStyled = styled(ContainerStyled)`
  overflow-y: auto;
  flex: 1;
  padding: 10px;
  height: 100%;
  max-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.zinc_300};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const FavoritEmptyStyled = styled(EmptyStyled)`
  flex: 1;
  padding: 10px;
`;
