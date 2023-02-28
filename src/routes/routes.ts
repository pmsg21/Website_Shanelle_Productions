import { lazy } from 'react';
import { Route } from '../interfaces/route';

const Home = lazy(() => import(/* webpackChunkName: "Home"*/ '../pages/Home'));

const Projects = lazy(
  () => import(/* webpackChunkName: "Projects"*/ '../pages/Projects')
);

const About = lazy(
  () => import(/* webpackChunkName: "About"*/ '../pages/About')
);

const Press = lazy(
  () => import(/* webpackChunkName: "Press"*/ '../pages/Press')
);

const Entertainment = lazy(
  () => import(/* webpackChunkName: "Entertainment"*/ '../pages/Entertainment')
);

const Contact = lazy(
  () => import(/* webpackChunkName: "Contact"*/ '../pages/Contact')
);

export const routes: Route[] = [
  {
    Component: Home,
    id: 'home-section',
    name: {
      en: 'Home',
      es: 'Inicio',
    },
    path: '',
    to: '/',
  },
  {
    Component: Projects,
    id: 'projects-section',
    name: {
      en: 'Projects',
      es: 'Proyectos',
    },
    path: 'projects',
    to: '/projects',
  },
  {
    Component: About,
    id: 'about-section',
    name: {
      en: 'About Us',
      es: 'Conócenos',
    },
    path: 'about',
    to: '/about',
  },
  {
    Component: Press,
    id: 'press-section',
    name: {
      en: 'Press',
      es: 'Prensa',
    },
    path: 'press',
    to: '/press',
  },
  {
    Component: Entertainment,
    id: 'entertainment-section',
    name: {
      en: 'Entertainment',
      es: 'Entretenimiento',
    },
    path: 'entertainment',
    to: '/entertainment',
  },
  {
    Component: Contact,
    id: 'contact-section',
    name: {
      en: 'Contact',
      es: 'Contacto',
    },
    path: 'contact',
    to: '/contact',
  },
];
