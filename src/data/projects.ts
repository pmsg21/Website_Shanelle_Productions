import { Project } from '../interfaces/project';
import AsOfYet from '../assets/images/projects/as-of-yet.svg';
import Deployed from '../assets/images/projects/deployed.svg';
import HighwayOne from '../assets/images/projects/highway-one.svg';
import Memorama from '../assets/images/projects/memorama.svg';
import Superstar from '../assets/images/projects/superstar.svg';
import TheFallingWorld from '../assets/images/projects/the-falling-world.svg';

export const projects: Project[] = [
  {
    alt: 'Deployed',
    description:
      'A short film by Jaclyn Bethany. Premiered at Cinema Femme Short Film Fest 2022.',
    emphasisText:
      'Sound Designers and Sound Mixers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    id: 1,
    image: Deployed,
    link: 'https://www.imdb.com/title/tt14398144/?ref_=nm_flmg_snd_3',
    title: 'DEPLOYED (2022)',
  },
  {
    alt: 'TheFallingWorld',
    description:
      'A feature film by Jaclyn Bethany. Premiered at Cinenequest Film Festival 2022, accepted at Defy Film Festival in Nashville, Festival Au Cinema in Chicago, and Not Film Fest in Italy.',
    emphasisText:
      'Sound Designers and Sound Mixers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    id: 2,
    image: TheFallingWorld,
    link: 'https://www.imdb.com/title/tt13374994/?ref_=nm_flmg_snd_2',
    title: 'THE FALLING WORLD (2022)',
  },
  {
    alt: 'HighwayOne',
    description:
      'A feature film by Jaclyn Bethany, premiered in Santa Barbara Film Festival, accepted in multiple festivals such as Defy Film Festival, RVK Feminist Film Festival,  Evolution Mallorca International Film Festival where it was nominated for Best Feature Film, and Not Film Fest in Italy, where it won Best Ensemble Performance. The feature was released on Digital platforms across the UK through Bohemia Media.',
    emphasisText:
      'Sound Designers and Sound Mixers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    id: 3,
    image: HighwayOne,
    link: 'https://www.imdb.com/title/tt10195722/?ref_=nm_flmg_snd_5',
    title: 'HIGHWAY ONE (2021)',
  },
  {
    alt: 'AsOfYet',
    description:
      'A feature film by Taylor Garron and Chanel James. Winner of the Nora Eprhon Award at Tribeca Film Festival, and Nominated for Best Feature Film at Denver International Film Festival.',
    emphasisText:
      'Dialogue Editors: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    id: 4,
    image: AsOfYet,
    link: 'https://www.imdb.com/title/tt14494520/?ref_=nm_flmg_snd_4',
    title: 'AS OF YET (2021)',
  },
  {
    alt: 'Superstar',
    description:
      'A short film by Daniel Larios, accepted at festivals including Bentonville, NewFilmmakers LA, San Diego Latino, and Philadelphia Latino where it won the LOLA Award. ',
    emphasisText:
      'Sound Designers: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    id: 5,
    image: Superstar,
    link: 'https://www.imdb.com/title/tt14228174/?ref_=nm_flmg_snd_6',
    title: 'SUPERESTAR (2021)',
  },
  {
    alt: 'Memorama',
    description:
      'A short film by Daniel Larios, played in competition at festivals including Oaxaca International, Paraguay International, and ICARO International, where it won 2nd place for Best Fiction Short.',
    emphasisText:
      'Sound Effects Editors: Alexandra Alvarez Pilonieta & Michelle Deniesse Lugo.',
    id: 6,
    image: Memorama,
    link: 'https://www.imdb.com/title/tt8878874/?ref_=nm_flmg_snd_1',
    title: 'MEMORAMA (2019)',
  },
];
