import styled from '@emotion/styled';

import { LanguageType } from '@/styles/theme';

interface DotProps {
  language: LanguageType;
}

const Dot = ({ language }: DotProps) => {
  return <DotStyled language={language} />;
};

export default Dot;

const DotStyled = styled.em<{ language: LanguageType }>`
  display: inline-block;
  margin-right: 4px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ theme, language }) => theme.languageColor[language] || '#3572A5'};
  vertical-align: middle;
`;
