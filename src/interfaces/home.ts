// INTERFACES
import { LanguageOptions } from './language';

export interface Catchphrase {
  id: number;
  text: LanguageOptions;
}

export interface Service {
  description: LanguageOptions;
  id: number;
  leftSide: boolean;
}
