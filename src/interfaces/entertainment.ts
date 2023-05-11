// INTERFACES
import { LanguageOptions } from './language';

export interface Entertainment {
  at: string;
  description: string;
  id: number;
  image: string;
  imageAlt: string;
  instagramURL: string;
  tiktokUrl: string;
}

export interface EntertainmentParagraphs {
  firstParagraph: LanguageOptions;
  fourthParagraph: LanguageOptions;
  secondParagraph: LanguageOptions;
  thirdParagraph: LanguageOptions;
}

export interface SocialMedia {
  animationDelay: string;
  followers: LanguageOptions;
  icon: string;
  id: number;
  likesAndViews: LanguageOptions;
  link: string;
  title: string;
}

export interface EntertainmentSocialMediaParagraphs {
  footer: LanguageOptions;
  header: LanguageOptions;
  socialMedia: SocialMedia[];
}
