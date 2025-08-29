// INTERFACES
import { LanguageOptions } from "./language";

interface PressMultipleUrls {
  id: number;
  title: string;
  url: string;
}

export interface Press {
  alt: string;
  className?: string;
  hasModal?: boolean;
  id: string;
  image: string;
  text: LanguageOptions;
  url?: string;
  urls?: PressMultipleUrls[];
}
