import { useRef } from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useRoutes } from 'react-router-dom';

import { routes } from './routes/routes';
import { Reset, Theme } from './styles';

function App() {
  const element = useRoutes(routes);
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ThemeProvider theme={Theme}>
        <Global styles={Reset} />
        {element}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
