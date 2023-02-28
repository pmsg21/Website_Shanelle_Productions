import { LanguageOptions } from './language';
export interface Catchphrase {
  id: number;
  text: LanguageOptions;
}

export interface Service {
  id: number;
  description: LanguageOptions;
  leftSide: boolean;
}
