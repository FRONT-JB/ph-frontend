import styled from '@emotion/styled';

export const CardItemStyled = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 0;
  cursor: pointer;
  &:not(:first-of-type) {
    border-top: 1px solid ${({ theme }) => theme.colors.zinc_200};
  }
`;

export const CardItemImageStyled = styled.span`
  overflow: hidden;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  & > img {
    display: inline-block;
    width: 100%;
  }
`;
