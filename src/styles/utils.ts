import { css } from '@emotion/react';
import styled from '@emotion/styled';

const fontEllipsis = (lineClamp: number) => css`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${lineClamp};
  -webkit-box-orient: vertical;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: calc(100% - 117px);
  width: 100%;
  height: 100%;
`;

const ContentStyled = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const EmptyStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.zinc_300};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.zinc_400};
  font-size: 14px;
`;

const TitleStyled = styled.strong`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.zinc_800};
  word-break: break-all;
  user-select: none;
  & > .icons {
    margin-right: 4px;
  }
`;

const DescriptionStyled = styled.p`
  font-size: 12px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.zinc_600};
  word-break: break-all;
  user-select: none;
  & > .icons {
    margin-right: 4px;
  }
`;

export {
  ContainerStyled,
  ContentStyled,
  DescriptionStyled,
  EmptyStyled,
  fontEllipsis,
  TitleStyled,
};
