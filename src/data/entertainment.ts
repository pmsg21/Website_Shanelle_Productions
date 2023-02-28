import {
  Entertainment,
  EntertainmentParagraphs,
} from '../interfaces/entertainment';
import Astrosaaurus from '../assets/images/entertainment/astrosaaurus.png';
import HearYouLater from '../assets/images/entertainment/hearyoulater.png';
import PinEmoji from '../assets/images/entertainment/pin_emoji.png';
import USAEmoji from '../assets/images/entertainment/usa_flag_emoji.png';
import HandEmoji from '../assets/images/entertainment/hand_emoji.png';
import BlackHeartEmoji from '../assets/images/entertainment/black_heart_emoji.png';

export const entertainment: Entertainment[] = [
  {
    at: '@astrosaaurus',
    description: `
      <p class='mb-1 mt-4'>M&S she/her/hers</p>
      <Image fluid alt='Pin Emoji' src=${PinEmoji} class="d-inline-block m-auto" />
      <Image fluid alt='USA Emoji' src=${USAEmoji} class="d-inline-block m-auto" />
      <p class='mb-3 mt-1'>Mentally on the day that we shot one of these videos</p>
      `,
    id: 1,
    image: Astrosaaurus,
    imageAlt: 'Astrosaaurus',
    instagramURL: 'https://www.instagram.com/astrosaaurus/',
    tiktokUrl: 'https://www.tiktok.com/@astrosaaurus',
  },
  {
    at: '@hearyoulater',
    description: `
      <p class='mb-1'>Hear you later, alligator<Image fluid alt='Hand Emoji' src=${HandEmoji} class="d-inline-block m-auto" /></p>
      <p class='mb-1'><Image fluid alt='Pin Emoji' src=${PinEmoji} class="d-inline-block m-auto" /> Come travel across the USA with us!</p>
      <p class='mb-1'><Image fluid alt='Black Heart Emoji' src=${BlackHeartEmoji} class="d-inline-block m-auto" /> Wives, Sound Designers & Audiovisual Producers</p>
      <p class='mb-1'>by @shanelleprod</p>
      `,
    id: 2,
    image: HearYouLater,
    imageAlt: 'HearYouLater',
    instagramURL: 'https://www.instagram.com/hearyoulater/',
    tiktokUrl: 'https://www.tiktok.com/@hearyoulater',
  },
];

export const entertainmentParagraphs: EntertainmentParagraphs = {
  firstParagraph: {
    en: `We have other exciting and fun projects we've been creating during our audiovisual journeys and work travels. We are exploring the USA to find the unique soundscapes of each region, town, and city, and we do the same with the image. We believe that because we can experience an ambiance and a sight firsthand, we are able to bring a unique point of view and sound knowledge to each audiovisual project.`,
    es: 'Tenemos otros proyectos emocionantes que hemos ido creando durante nuestros viajes de trabajo. Estamos explorando los EEUU para encontrar los paisajes sonoros únicos de cada región, pueblo y ciudad, y hacemos lo mismo con la imagen. Creemos que, porque podemos experimentar un ambiente sonoro y un paisaje de primera mano, podemos aportar un punto de vista único y un conocimiento sonoro a cada proyecto audiovisual.',
  },
  secondParagraph: {
    en: `Where did we get our passion for content creation from? How did we realize that we could combine our talents to create something unique? Why did get into audiovisual production in the first place? Well, it all started with music, but that's a story we'll tell you later. In the meantime, check out some of our music and favorite tunes.`,
    es: '¿De dónde sacamos nuestra pasión por la creación de contenido? ¿Cómo nos dimos cuenta de que podíamos combinar nuestros talentos para crear algo único? ¿Por qué elegimos la producción audiovisual en primer lugar? Bueno, todo empezó con la música, pero esa es una historia que te contaremos más adelante. Mientras tanto, echa un vistazo a nuestra música y canciones favoritas.',
  },
};
