import { Global } from '@emotion/react';

import { reset } from './styles';

function App() {
  return (
    <>
      <Global styles={reset} />
      <div className="App">Apps</div>
    </>
  );
}

export default App;
