import { LanguageOptions } from './language';
export interface AboutPersonProps {
  isPortrait: boolean;
  person: Person;
  screenWidth: number;
}

export interface Person {
  firstParagraph: LanguageOptions;
  id: number;
  image: string;
  imageAlt: string;
  imagePhone: string;
  imdb: string;
  secondParagraph: LanguageOptions;
  thirdParagraph: LanguageOptions;
  title: string;
  titleClass: string;
  titleImage: string;
}

export interface MissionVisionValues {
  mission: LanguageOptions;
  values: LanguageOptions;
  vision: LanguageOptions;
}
