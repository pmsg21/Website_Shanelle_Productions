// CONTEXT
import { LanguageContextProvider } from './context/LanguageContext';

// COMPONENTS
import { Navigation } from './routes/Navigation';

function App(): JSX.Element {
  return (
    <LanguageContextProvider>
      <Navigation />
    </LanguageContextProvider>
  );
}

export default App;
