import styled from '@emotion/styled';

export const CardItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
`;

export const CardItemImage = styled.span`
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
