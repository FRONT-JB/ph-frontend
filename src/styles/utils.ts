import styled from '@emotion/styled';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: calc(100% - 129px);
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

export { ContainerStyled, ContentStyled, EmptyStyled };
