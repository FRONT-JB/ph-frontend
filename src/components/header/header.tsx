import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { RoutePathConstants } from '@/constants';
import { useRepositoryContext } from '@/provider';

import {
  HeaderStyled,
  ImageStyled,
  LogoStyled,
  NavLinkText,
  NavListStyled,
  NavStyled,
} from './header.style';

const Header = () => {
  const { favorit } = useRepositoryContext();
  const hasFavorit = useMemo(() => Boolean(favorit.length), [favorit]);

  return (
    <HeaderStyled>
      <LogoStyled to={RoutePathConstants.Root}>
        <ImageStyled src="/github-logo.svg" />
      </LogoStyled>
      <NavStyled>
        <NavListStyled>
          <li>
            <NavLink to={RoutePathConstants.Root}>
              {({ isActive }) => <NavLinkText isActive={isActive}>Home</NavLinkText>}
            </NavLink>
          </li>
          <li>
            <NavLink to={RoutePathConstants.Favorit}>
              {({ isActive }) => (
                <NavLinkText isActive={isActive}>
                  Favorit
                  {hasFavorit && <em>{favorit.length}</em>}
                </NavLinkText>
              )}
            </NavLink>
          </li>
        </NavListStyled>
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;
