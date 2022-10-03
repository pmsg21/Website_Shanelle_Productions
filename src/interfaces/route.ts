import { LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

export interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  id: string;
  name: string;
  path: string;
  to: string;
}
