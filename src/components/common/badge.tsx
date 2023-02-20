import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface BadgeProps {
  badgeText: ReactNode;
}

const Badge = ({ badgeText }: BadgeProps) => {
  return <BadgeStyled>{badgeText}</BadgeStyled>;
};

const BadgeStyled = styled.em`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.zinc_300};
  border-radius: 8px;
  font-size: 12px;
  font-weight: 400;
`;

export default Badge;
