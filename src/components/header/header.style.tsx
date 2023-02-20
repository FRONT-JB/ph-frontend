import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoStyled = styled(Link)`
  display: block;
  text-align: center;
`;

export const ImageStyled = styled.img`
  display: inline-block;
  max-width: 100px;
`;

export const NavStyled = styled.nav`
  display: block;
  width: 100%;
`;

export const NavListStyled = styled.ul`
  display: flex;
  width: 100%;
  & > li {
    flex: 1;
  }
`;

export const NavLinkText = styled.span<{ isActive: boolean }>`
  display: block;
  position: relative;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.zinc_300};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.zinc_600};
  font-size: 14px;
  text-align: center;
  transition: all 0.3s ease;
  ${({ theme, isActive }) =>
    isActive
      ? css`
          border-bottom-color: ${theme.colors.zinc_800};
        `
      : ''};

  & > em {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.zinc_800};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
  }
`;
