import { Theme } from '@emotion/react';

export type ColorType = keyof typeof colors;
export type BreakPointType = keyof typeof fieldSize;

export type ThemeType = {
  colors: { [token in ColorType]: string };
  fieldSize: { [token in BreakPointType]: string };
};

const base = {
  white: '#fff',
  black: '#242526',
};

const zinc = {
  zinc_50: '#fafafa',
  zinc_100: '#f4f4f5',
  zinc_200: '#e4e4e7',
  zinc_300: '#d4d4d8',
  zinc_400: '#a1a1aa',
  zinc_500: '#71717a',
  zinc_600: '#52525b',
  zinc_700: '#3f3f46',
  zinc_800: '#27272a',
  zinc_900: '#18181b',
};

const colors = {
  ...base,
  ...zinc,
};

const fieldSize = {
  sm: '475px',
  md: '768px',
  lg: '1024px',
};

const theme: Theme = {
  colors,
  fieldSize,
};

export default theme;
