// REACT IMPORTS
import { LazyExoticComponent } from 'react';

// INTERFACES
import { LanguageOptions } from './language';

type JSXComponent = () => JSX.Element;

export interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  id: string;
  name: LanguageOptions;
  path: string;
  to: string;
}
