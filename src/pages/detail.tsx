import { useParams } from 'react-router-dom';

import { Container } from '../styles';

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  return <Container>Detail {id}</Container>;
};

export default Detail;
