// REACT IMPORTS
import { ReactElement } from 'react';

// CONTEXT
import { LanguageContextProvider } from './context/LanguageContext';

// COMPONENTS
import { Navigation } from './routes/Navigation';

function App(): ReactElement {
  return (
    <LanguageContextProvider>
      <Navigation />
    </LanguageContextProvider>
  );
}

export default App;
