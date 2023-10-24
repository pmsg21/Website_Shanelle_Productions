// REACT IMPORTS
import { ReactElement, createContext, useState } from 'react';

interface LanguageContextProps {
  siteLanguage: string;
  handleLanguageChange(): void;
}

interface LanguageContextProviderProps {
  children: ReactElement;
}

const currentSiteLanguage = localStorage.getItem('currentSiteLanguage');

export const LanguageContext = createContext<LanguageContextProps>({
  siteLanguage: currentSiteLanguage ? currentSiteLanguage : 'en',
  handleLanguageChange: () => {},
});

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [siteLanguage, setSiteLanguage] = useState(
    currentSiteLanguage ? currentSiteLanguage : 'en'
  );

  const handleLanguageChange = (): void => {
    setSiteLanguage((prev): string => {
      const currentSiteLanguage = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('currentSiteLanguage', currentSiteLanguage);
      return currentSiteLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ siteLanguage, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
