import styled from '@emotion/styled';

import { Container, Content } from '../styles';

const Main = () => {
  return (
    <Container>
      <MainContentStyled></MainContentStyled>
    </Container>
  );
};

export default Main;

const MainContentStyled = styled(Content)`
  max-height: calc(100% - 50px);
`;
