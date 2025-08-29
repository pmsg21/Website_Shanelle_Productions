// INTERFACES
import { LanguageOptions } from "./language";

export interface OurOriginals {
  at: string;
  id: number;
  image: string;
  imageAlt: string;
  instagramURL: string;
  tiktokUrl: string;
}

export interface Awards {
  image: string;
  imageAlt: string;
  text: LanguageOptions;
}

export interface OurOriginalSeries {
  awards: Awards[];
  banner: string;
  bannerAlt: string;
  credits: LanguageOptions;
  description: LanguageOptions;
  id: number;
  imdbLink: string;
  logo: string;
  logoAlt: string;
  trailerLink: string;
  views: string;
  watchLink: string;
}

export interface OurOriginalsParagraphs {
  firstParagraph: LanguageOptions;
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

export interface OurOriginalsSocialMediaParagraphs {
  socialMedia: SocialMedia[];
  socialMediaDescription: LanguageOptions;
  socialMediaFooter: LanguageOptions;
  socialMediaHeader: LanguageOptions;
  socialMediaYoutubePlaque: LanguageOptions;
}
