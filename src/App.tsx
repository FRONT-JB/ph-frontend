import { Global, ThemeProvider } from '@emotion/react';

import { useRoutes } from 'react-router-dom';

import { routes } from './routes/Routes';
import { Reset, Theme } from './styles';

function App() {
  const element = useRoutes(routes);

  return (
    <ThemeProvider theme={Theme}>
      <Global styles={Reset} />
      {element}
    </ThemeProvider>
  );
}

export default App;
