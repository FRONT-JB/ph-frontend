import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { RoutePathConstants } from '@/constants';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo to={RoutePathConstants.Root}>
        <Image src="/github-logo.svg" />
      </Logo>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  display: block;
  text-align: center;
`;

const Image = styled.img`
  display: inline-block;
  max-width: 180px;
`;
