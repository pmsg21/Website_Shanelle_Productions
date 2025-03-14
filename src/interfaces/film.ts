// INTERFACES
import { LanguageOptions } from "./language";

export interface Film {
  alt: string;
  description: LanguageOptions;
  emphasisText: LanguageOptions;
  id: number;
  image: string;
  link: string;
  title: string;
}
