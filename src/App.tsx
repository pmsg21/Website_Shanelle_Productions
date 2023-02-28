import { Navigation } from './routes/Navigation';
import { LanguageContextProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageContextProvider>
      <Navigation />
    </LanguageContextProvider>
  );
}

export default App;
