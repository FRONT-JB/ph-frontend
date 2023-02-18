import { ContainerStyled, EmptyStyled } from '@/styles/utils';
import styled from '@emotion/styled';

import { CardItem } from '../card';

export const FavoritContainer = styled(ContainerStyled)`
  overflow-y: auto;
  flex: 1;
  padding: 10px;
  height: 100%;
  max-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.zinc_300};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const FavoritEmpty = styled(EmptyStyled)`
  flex: 1;
  padding: 10px;
`;

export const FavoritCardItem = styled(CardItem)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 0;
  cursor: pointer;
  &:not(:first-of-type) {
    border-top: 1px solid ${({ theme }) => theme.colors.zinc_200};
  }
`;

export const FavoritCardItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FavoritCardItemBody = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.zinc_600};
  line-height: 23px;
`;
