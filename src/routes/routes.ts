// REACT IMPORTS
import { lazy } from "react";

// INTERFACES
import { Route } from "../interfaces/route";

const Home = lazy(() => import(/* webpackChunkName: "Home"*/ "../pages/Home"));

const About = lazy(
  () => import(/* webpackChunkName: "About"*/ "../pages/About")
);

const Film = lazy(() => import(/* webpackChunkName: "Film"*/ "../pages/Film"));

const OurOriginals = lazy(
  () => import(/* webpackChunkName: "OurOriginals"*/ "../pages/OurOriginals")
);

const Services = lazy(
  () => import(/* webpackChunkName: "Services"*/ "../pages/Services")
);

const Press = lazy(
  () => import(/* webpackChunkName: "Press"*/ "../pages/Press")
);

const Contact = lazy(
  () => import(/* webpackChunkName: "Contact"*/ "../pages/Contact")
);

export const routes: Route[] = [
  {
    Component: Home,
    id: "home-section",
    name: {
      en: "Home",
      es: "Inicio",
    },
    path: "",
    to: "/",
  },
  {
    Component: OurOriginals,
    id: "our-originals-section",
    name: {
      en: "Our Originals",
      es: "Lo Nuestro",
    },
    path: "our-originals",
    to: "/our-originals",
  },
  {
    Component: About,
    id: "about-section",
    name: {
      en: "About Us",
      es: "Conócenos",
    },
    path: "about",
    to: "/about",
  },
  {
    Component: Film,
    id: "film-section",
    name: {
      en: "Film",
      es: "Cine",
    },
    path: "film",
    to: "/film",
  },
  {
    Component: Services,
    id: "services-section",
    name: {
      en: "Services",
      es: "Servicios",
    },
    path: "services",
    to: "/services",
  },
  {
    Component: Press,
    id: "press-section",
    name: {
      en: "Press",
      es: "Prensa",
    },
    path: "press",
    to: "/press",
  },
  {
    Component: Contact,
    id: "contact-section",
    name: {
      en: "Contact",
      es: "Contacto",
    },
    path: "contact",
    to: "/contact",
  },
];
