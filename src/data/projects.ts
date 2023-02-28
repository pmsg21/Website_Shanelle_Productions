import { LanguageOptions } from '../interfaces/language';
import { Project } from '../interfaces/project';
import AsOfYet from '../assets/images/projects/as-of-yet.png';
import BeforeTheWorldSetOnFire from '../assets/images/projects/before-the-world-set-on-fire.png';
import Deployed from '../assets/images/projects/deployed.png';
import HighwayOne from '../assets/images/projects/highway-one.png';
import Memorama from '../assets/images/projects/memorama.png';
import Superstar from '../assets/images/projects/superstar.png';
import TheFallingWorld from '../assets/images/projects/the-falling-world.png';

export const projects: Project[] = [
  {
    alt: 'BeforeTheWorldSetOnFire',
    description: {
      en: 'A feature film by Jaclyn Bethany. An unidentifiable virus breaks out at a college, forcing professor Anya Davis to conduct her seminar online. After a tragedy happens in the class, a battle of ethics begins between Anya and the institution.',
      es: 'Un largometraje de Jaclyn Bethany. Un virus no identificable irrumpe en una universidad y obliga a la profesora Anya Davis a realizar su seminario en línea. Luego de que ocurre una tragedia en la clase, comienza una batalla de ética entre Anya y la institución.',
    },
    emphasisText: {
      en: 'Sound Designers and Sound Mixers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
      es: 'Diseño de sonido y mezcla de sonido por: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    },
    id: 1,
    image: BeforeTheWorldSetOnFire,
    link: 'https://www.imdb.com/title/tt12457712/?ref_=tt_mv_close',
    title: 'BEFORE THE WORLD SET ON FIRE (2023)',
  },
  {
    alt: 'TheFallingWorld',
    description: {
      en: 'A feature film by Jaclyn Bethany. Premiered at Cinenequest Film Festival 2022, nominated for Best Feature Film, Best Sound Design, Best Thriller, Best Editing, and Best Queer at FilmHaus Festival in Berlin, Germany. Accepted at Defy Film Festival in Nashville, Festival Au Cinema in Chicago, and Not Film Fest in Italy',
      es: 'Un largometraje de Jaclyn Bethany. Estrenada en Cinenequest Film Festival 2022, nominada a Mejor Largometraje, Mejor Diseño de Sonido, Mejor Thriller, Mejor Montaje y Mejor Queer en el Festival FilmHaus de Berlín, Alemania. Aceptado en Defy Film Festival en Nashville, Festival Au Cinema en Chicago y Not Film Fest en Italia.',
    },
    emphasisText: {
      en: 'Sound Designers and Sound Mixers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
      es: 'Diseño de sonido y mezcla de sonido por: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    },
    id: 2,
    image: TheFallingWorld,
    link: 'https://www.imdb.com/title/tt13374994/?ref_=nm_flmg_snd_2',
    title: 'THE FALLING WORLD (2022)',
  },
  {
    alt: 'Deployed',
    description: {
      en: 'A short film by Jaclyn Bethany. Premiered at Cinema Femme Short Film Fest 2022.',
      es: 'Un cortometraje de Jaclyn Bethany. Estrenado en Cinema Femme Short Film Fest 2022.',
    },
    emphasisText: {
      en: 'Sound Designers and Sound Mixers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
      es: 'Diseño de sonido y mezcla de sonido por: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    },
    id: 3,
    image: Deployed,
    link: 'https://www.imdb.com/title/tt14398144/?ref_=nm_flmg_snd_3',
    title: 'DEPLOYED (2022)',
  },
  {
    alt: 'HighwayOne',
    description: {
      en: 'A feature film by Jaclyn Bethany, premiered in Santa Barbara Film Festival, accepted in multiple festivals such as Defy Film Festival, RVK Feminist Film Festival,  Evolution Mallorca International Film Festival where it was nominated for Best Feature Film, and Not Film Fest in Italy, where it won Best Ensemble Performance. The feature was released on Digital platforms across the UK through Bohemia Media. The film is available to stream on digital platforms in North America.',
      es: 'Un largometraje de Jaclyn Bethany, estrenado en el Festival de Cine de Santa Bárbara, aceptado en múltiples festivales como Defy Film Festival, RVK Feminist Film Festival, Evolution Mallorca International Film Festival donde fue nominado a Mejor Largometraje, y Not Film Fest en Italia, donde ganó Mejor Interpretación de un Elenco. Disponible en plataformas digitales en todo el Reino Unido y América del Norte.',
    },
    emphasisText: {
      en: 'Sound Designers and Sound Mixers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
      es: 'Diseño de sonido y mezcla de sonido por: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    },
    id: 4,
    image: HighwayOne,
    link: 'https://www.imdb.com/title/tt10195722/?ref_=nm_flmg_snd_5',
    title: 'HIGHWAY ONE (2021)',
  },
  {
    alt: 'AsOfYet',
    description: {
      en: 'A feature film by Taylor Garron and Chanel James. Winner of the Nora Eprhon Award at Tribeca Film Festival, and Nominated for Best Feature Film at Denver International Film Festival.',
      es: 'Un largometraje de Taylor Garron y Chanel James. Ganador del Premio Nora Eprhon en el Festival de Cine de Tribeca y Nominado a Mejor Película en el Festival Internacional de Cine de Denver.',
    },
    emphasisText: {
      en: 'Dialogue Editors: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
      es: 'Diálogos editados por: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    },
    id: 5,
    image: AsOfYet,
    link: 'https://www.imdb.com/title/tt14494520/?ref_=nm_flmg_snd_4',
    title: 'AS OF YET (2021)',
  },
  {
    alt: 'Superstar',
    description: {
      en: 'A short film by Daniel Larios, accepted at festivals including Bentonville, NewFilmmakers LA, San Diego Latino, and Philadelphia Latino where it won the LOLA Award. ',
      es: 'Un cortometraje de Daniel Larios, aceptado en festivales como Bentonville, NewFilmmakers LA, San Diego Latino y Philadelphia Latino donde ganó el Premio LOLA.',
    },
    emphasisText: {
      en: 'Sound Designers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
      es: 'Diseño de sonido por: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    },
    id: 6,
    image: Superstar,
    link: 'https://www.imdb.com/title/tt14228174/?ref_=nm_flmg_snd_6',
    title: 'SUPERESTAR (2021)',
  },
  {
    alt: 'Memorama',
    description: {
      en: 'A short film by Daniel Larios, played in competition at festivals including Oaxaca International, Paraguay International, and ICARO International, where it won 2nd place for Best Fiction Short.',
      es: 'Cortometraje de Daniel Larios, presentado en competencia en festivales como: Internacional de Oaxaca, Internacional de Paraguay e ICARO Internacional, donde obtuvo el 2do lugar como Mejor Cortometraje de Ficción.',
    },
    emphasisText: {
      en: 'Sound Effects Editors: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
      es: 'Efectos de sonido editados por: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    },
    id: 7,
    image: Memorama,
    link: 'https://www.imdb.com/title/tt8878874/?ref_=nm_flmg_snd_1',
    title: 'MEMORAMA (2019)',
  },
];

const novaRiseInvest = `<a class="shanelle-projects-award-link transition" href="https://www.youtube.com/c/NOVARISEINVEST" target="_blank">Novarise Invest</a>`;
const novaRiseLatino = `<a class="shanelle-projects-award-link transition" href="https://www.youtube.com/c/NOVARISELATINO" target="_blank">Novarise Latino </a>`;
const novaRiseDigital = `<a class="shanelle-projects-award-link transition" href="https://www.youtube.com/c/NOVARISEDIGITAL" target="_blank">Novarise Digital </a>`;

export const projectsAward: LanguageOptions = {
  en: `As social media content post-producers, Michelle and Alexandra have worked on several projects, highlighting their work for the YouTube channels ${novaRiseInvest}, ${novaRiseLatino}, and ${novaRiseDigital}. In 2020, Michelle and Alexandra received a YouTube Creator Award for their work on Novarise Latino. Currently, they are the Creative Directors of Novarise, a renowned financial education company.`,
  es: `Como postproductoras de contenido de redes sociales, Michelle y Alexandra han trabajado en varios proyectos, destacando su trabajo para los canales de YouTube ${novaRiseInvest}, ${novaRiseLatino} y ${novaRiseDigital}. En 2020, Michelle y Alexandra recibieron un YouTube Creator Award por su trabajo en Novarise Latino. Actualmente, son las Directoras Creativas de Novarise, una reconocida empresa de educación financiera.`,
};
