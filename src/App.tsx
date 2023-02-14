import { Global, ThemeProvider } from '@emotion/react';

import { Layout } from './component';
import { Reset, Theme } from './styles';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Global styles={Reset} />
      <Layout>Apps</Layout>
    </ThemeProvider>
  );
}

export default App;
