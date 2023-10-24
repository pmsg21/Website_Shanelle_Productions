// REACT IMPORTS
import { LazyExoticComponent, ReactElement } from 'react';

// INTERFACES
import { LanguageOptions } from './language';

type ReactComponent = () => ReactElement;

export interface Route {
  Component: LazyExoticComponent<ReactComponent> | ReactComponent;
  id: string;
  name: LanguageOptions;
  path: string;
  to: string;
}
