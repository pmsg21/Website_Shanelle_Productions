// INTERFACES
import { LanguageOptions } from './language';

export interface ServicesListProps {
  className?: string;
  leftSide: boolean;
}

export interface ServicesListItemProps {
  description: LanguageOptions;
  key: number;
}

export interface AboutTitleProps {
  classes?: string;
  title: string;
}

export interface FooterProps {
  className?: string;
}
