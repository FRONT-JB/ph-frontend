import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: calc(100% - 129px);
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

export { Container, Content };
