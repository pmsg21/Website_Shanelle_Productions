import { LanguageOptions } from './language';
export interface Entertainment {
  at: string;
  className?: string;
  description: string;
  id: number;
  image: string;
  imageAlt: string;
  instagramURL: string;
  tiktokUrl: string;
}

export interface EntertainmentParagraphs {
  firstParagraph: LanguageOptions;
  secondParagraph: LanguageOptions;
}
