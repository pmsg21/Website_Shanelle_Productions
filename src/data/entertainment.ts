// INTERFACES
import {
  Entertainment,
  EntertainmentParagraphs,
  EntertainmentSocialMediaParagraphs,
} from '../interfaces/entertainment';

// ASSETS
import Astrosaaurus from '../assets/images/entertainment/astrosaaurus.png';
import Facebook from '../assets/images/entertainment/facebook.svg';
import HearYouLater from '../assets/images/entertainment/hearyoulater.png';
import Instagram from '../assets/images/entertainment/instagram.svg';
import TikTok from '../assets/images/entertainment/tiktok.svg';
import Youtube from '../assets/images/entertainment/youtube.svg';

export const entertainment: Entertainment[] = [
  {
    at: '@astrosaaurus',
    id: 1,
    image: Astrosaaurus,
    imageAlt: 'Astrosaaurus',
    instagramURL: 'https://www.instagram.com/astrosaaurus/',
    tiktokUrl: 'https://www.tiktok.com/@astrosaaurus',
  },
  {
    at: '@hearyoulater',
    id: 2,
    image: HearYouLater,
    imageAlt: 'HearYouLater',
    instagramURL: 'https://www.instagram.com/hearyoulater/',
    tiktokUrl: 'https://www.tiktok.com/@hearyoulater',
  },
];

export const entertainmentParagraphs: EntertainmentParagraphs = {
  firstParagraph: {
    en: `In our social media, we've shown some of our abilities by dubbing (fandubbing) shorts and reels of our favorite TV series and people have loved it. We are creating a community of people that share our interests and like and follow our work. Most of series we've chosen don't have a Spanish dubbing and we saw a great opportunity to promote our work and to give the fans of the series a glimpse of what their favorite characters would sound like in their own language.`,
    es: 'En nuestras redes sociales, hemos mostrado algunas de nuestras habilidades doblando shorts y reels (fandubs) de nuestras series de TV favoritas y a la gente le ha encantado. Estamos creando una comunidad de personas que comparten nuestros intereses y les gusta y siguen nuestro trabajo. La mayoría de las series que hemos elegido no poseen doblaje al español así que vimos una gran oportunidad para promocionar nuestro trabajo y darle la oportunidad a los fans de escuchar a sus personajes favoritos en su propio idioma.',
  },
  secondParagraph: {
    en: 'In addition to the shorts and reels we have also made some music videos. These accompass our habilities with dubbing, singing, sound post production, video filming and editing.',
    es: 'Además de los cortos y reels también hemos realizado algunos videoclips. Estos abarcan nuestras habilidades de doblaje, canto, postproducción de sonido, filmación y edición de video.',
  },
  thirdParagraph: {
    en: `Where did we get our passion for content creation from? How did we realize that we could combine our talents to create something unique? Why did get into audiovisual production in the first place? Well, it all started with music, but that's a story we'll tell you later. In the meantime, check out some of our music and favorite tunes.`,
    es: '¿De dónde sacamos nuestra pasión por la creación de contenido? ¿Cómo nos dimos cuenta de que podíamos combinar nuestros talentos para crear algo único? ¿Por qué elegimos la producción audiovisual en primer lugar? Bueno, todo empezó con la música, pero esa es una historia que te contaremos más adelante. Mientras tanto, echa un vistazo a nuestra música y canciones favoritas.',
  },
  fourthParagraph: {
    en: `We have other exciting and fun projects we've been creating during our audiovisual journeys and work travels. We are exploring the USA to find the unique soundscapes of each region, town, and city, and we do the same with the image. We believe that because we can experience an ambiance and a sight firsthand, we are able to bring a unique point of view and sound knowledge to each audiovisual project.`,
    es: 'Tenemos otros proyectos emocionantes que hemos ido creando durante nuestros viajes de trabajo. Estamos explorando los EEUU para encontrar los paisajes sonoros únicos de cada región, pueblo y ciudad, y hacemos lo mismo con la imagen. Creemos que, porque podemos experimentar un ambiente sonoro y un paisaje de primera mano, podemos aportar un punto de vista único y un conocimiento sonoro a cada proyecto audiovisual.',
  },
};

export const entertainmentSocialMediaParagraphs: EntertainmentSocialMediaParagraphs =
  {
    header: {
      en: 'Our work has granted us...',
      es: 'Nuestro trabajo nos ha conseguido...',
    },
    socialMedia: [
      {
        animationDelay: 'animate__delay-1-5s',
        followers: {
          en: '+ 50K followers',
          es: '+ 50K seguidores',
        },
        icon: TikTok,
        id: 1,
        likesAndViews: {
          en: '+ 1.2MM likes',
          es: '+ 1.2MM me gusta',
        },
        link: 'https://www.tiktok.com/@shanelleprod',
        title: 'Tiktok',
      },
      {
        animationDelay: 'animate__delay-2s',
        followers: {
          en: '+ 27K followers',
          es: '+ 27K seguidores',
        },
        icon: Youtube,
        id: 2,
        likesAndViews: {
          en: '+ 4.9MM views',
          es: '+ 4.9MM vistas',
        },
        link: 'https://www.youtube.com/channel/UCV2U3zcCVmNSpYkoe7hBQcQ',
        title: 'Youtube',
      },
      {
        animationDelay: 'animate__delay-2-5s',
        followers: {
          en: '+ 26K followers',
          es: '+ 26K seguidores',
        },
        icon: Instagram,
        id: 3,
        likesAndViews: {
          en: '+ 457K likes',
          es: '+ 457K me gusta',
        },
        link: 'https://www.instagram.com/shanelleprod',
        title: 'Instagram',
      },
      {
        animationDelay: 'animate__delay-3s',
        followers: {
          en: '+ 10K followers',
          es: '+ 10K seguidores',
        },
        icon: Facebook,
        id: 4,
        likesAndViews: {
          en: '+ 157K likes',
          es: '+ 157K me gusta',
        },
        link: 'https://www.facebook.com/shanelleprod',
        title: 'Facebook',
      },
    ],
    footer: {
      en: 'All of our work is made with LOVE. Follow us in all of our social media to see more.',
      es: 'Todo nuestro trabajo está hecho con AMOR. Síguenos en nuestras redes sociales para más contenido.',
    },
  };
