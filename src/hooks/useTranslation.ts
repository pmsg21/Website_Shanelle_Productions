// INTERFACES
import { LanguageOptions } from '../interfaces/language';

// HOOKS
import { useLanguage } from './useLanguage';

export function useTranslation(): {
  translate: (value: LanguageOptions) => string;
} {
  const { siteLanguage } = useLanguage();

  function translate(value: LanguageOptions) {
    return value[siteLanguage as keyof typeof value];
  }

  return {
    translate,
  };
}
