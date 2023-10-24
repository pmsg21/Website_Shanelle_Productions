// REACT IMPORTS
import { useContext } from 'react';

// CONTEXT
import { LanguageContext } from '../context/LanguageContext';

export function useLanguage() {
  return useContext(LanguageContext);
}
