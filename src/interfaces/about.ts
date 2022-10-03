export interface AboutPersonProps {
  isPortrait: boolean;
  person: Person;
  screenWidth: number;
}

export interface Person {
  firstParagraph: string;
  id: number;
  image: string;
  imageAlt: string;
  imagePhone: string;
  imdb: string;
  secondParagraph: string;
  thirdParagraph: string;
  title: string;
  titleClass: string;
  titleImage: string;
}
