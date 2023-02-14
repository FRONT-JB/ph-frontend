import { ThemeType } from './theme';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
