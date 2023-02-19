import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRoutes } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import { RepositoryProvider } from './provider';
import { routes } from './routes';
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
      <RepositoryProvider>
        <ThemeProvider theme={Theme}>
          <Global styles={Reset} />
          {element}
        </ThemeProvider>
      </RepositoryProvider>
    </QueryClientProvider>
  );
}

export default App;
