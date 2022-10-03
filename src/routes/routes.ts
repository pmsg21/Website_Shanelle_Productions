import { lazy } from 'react';
import { Route } from '../interfaces/route';

const About = lazy(
  () => import(/* webpackChunkName: "About"*/ '../pages/About')
);

const Contact = lazy(
  () => import(/* webpackChunkName: "Contact"*/ '../pages/Contact')
);

const Home = lazy(() => import(/* webpackChunkName: "Home"*/ '../pages/Home'));

const Press = lazy(
  () => import(/* webpackChunkName: "Press"*/ '../pages/Press')
);

const Projects = lazy(
  () => import(/* webpackChunkName: "Projects"*/ '../pages/Projects')
);

export const routes: Route[] = [
  {
    Component: Home,
    id: 'home-section',
    name: 'Home',
    path: '',
    to: '/',
  },
  {
    Component: Projects,
    id: 'projects-section',
    name: 'Projects',
    path: 'projects',
    to: '/projects',
  },
  {
    Component: About,
    id: 'about-section',
    name: 'About Us',
    path: 'about',
    to: '/about',
  },
  {
    Component: Press,
    id: 'press-section',
    name: 'Press',
    path: 'press',
    to: '/press',
  },
  {
    Component: Contact,
    id: 'contact-section',
    name: 'Contact',
    path: 'contact',
    to: '/contact',
  },
];
