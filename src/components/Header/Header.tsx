import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>
        <Image src="/github-logo.svg" />
      </Logo>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header``;

const Logo = styled.span`
  display: block;
  text-align: center;
`;

const Image = styled.img`
  display: inline-block;
  max-width: 180px;
`;
