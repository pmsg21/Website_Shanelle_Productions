import { LazyExoticComponent } from 'react';
import { LanguageOptions } from './language';

type JSXComponent = () => JSX.Element;

export interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  id: string;
  name: LanguageOptions;
  path: string;
  to: string;
}
