import { Person, MissionVisionValues } from '../interfaces/about';
import Michelle from '../assets/images/about/michelle-lugo-headshot.png';
import MichellePhone from '../assets/images/about/michelle-lugo-headshot-phone.png';
import MichelleTitle from '../assets/images/about/michelle-lugo.png';
import Shana from '../assets/images/about/shana-pilonieta-headshot.png';
import ShanaPhone from '../assets/images/about/shana-pilonieta-headshot-phone.png';
import ShanaTitle from '../assets/images/about/shana-pilonieta.png';

export const persons: Person[] = [
  {
    firstParagraph: {
      en: 'Alexandra "Shana" is a Venezuelan sound designer, sound producer, voice artist, singer, social media video editor, and social media content post-producer.',
      es: 'Alexandra "Shana" es una diseñadora de sonido, productora de sonido, artista de voz, cantante, editora de videos para redes sociales y postproductora de contenido para redes sociales venezolana.',
    },
    id: 1,
    image: Shana,
    imageAlt: 'Shana Headshot',
    imagePhone: ShanaPhone,
    imdb: 'https://www.imdb.com/name/nm10097060/?ref_=nv_sr_srsg_0',
    secondParagraph: {
      en: `She was born and raised in Caracas, Venezuela. Fluent in English, Spanish, and speaks intermediate French. She's an Associate of Arts in Sound Design For Visual Media and Sound Production for Audiovisuals.`,
      es: 'Nació y creció en Caracas, Venezuela. Habla inglés, español y francés. Es Diseñadora y Productora de Sonido para Audiovisuales.',
    },
    thirdParagraph: {
      en: `Awarded academic-based Honorific Mentions from 2017 to 2019, Best Short Film in an Audiovisual Marathon in 2016, and Best Sound for Sci-Fi Scene in 2017, and multiple GPA-based Honorific Mentions (2016-2019). She's also known for pursuing a singing career in a renowned Venezuelan musical group from 2013 to 2016.`,
      es: 'Obtuvo Menciones Honoríficas de carácter académico de 2017 a 2019, como Mejor Cortometraje en Maratón Audiovisual en 2016 y Mejor Sonido para Escena de Ciencia Ficción en 2017, entre otros. Recibió múltiples Menciones Honoríficas basadas en GPA (2016-2019). También es conocida por seguir una carrera como cantante en un reconocido grupo musical venezolano del 2013 al 2016.',
    },
    title: 'Alexandra Alvarez Pilonieta',
    titleClass: 'shana',
    titleImage: ShanaTitle,
  },
  {
    firstParagraph: {
      en: `Michelle is a Venezuelan sound designer, sound producer, voice artist, and social media content post-producer. Michelle's an Associate of Arts in Sound Production and Sound Design For Visual Media.`,
      es: 'Michelle es una diseñadora de sonido, productora de sonido, artista de voz y postproductora de contenido de redes sociales venezolana. Michelle es Diseñadora y Productora de Sonido para audiovisuales.',
    },
    id: 2,
    image: Michelle,
    imageAlt: 'Michelle Headshot',
    imagePhone: MichellePhone,
    imdb: 'https://www.imdb.com/name/nm10097059/?ref_=nv_sr_srsg_0',
    secondParagraph: {
      en: 'During her time as a college student she was awarded Best Sound Art (2017), Best Sound Design for a Commercial (2018), Best Short Film in an Audiovisual Marathon (2016), and multiple GPA-based Honorific Mentions (2016-2019).',
      es: 'Durante su etapa como estudiante universitaria fue galardonada como Mejor Arte Sonoro (2017), Mejor Diseño de Sonido para un Comercial (2018), Mejor Cortometraje en un Maratón Audiovisual (2016) y múltiples Menciones Honoríficas basadas en GPA (2016-2019).',
    },
    thirdParagraph: {
      en: `Michelle also participated in the acting summer intensive program of The American Academy of Dramatic Arts in Los Angeles, California (2015), and has minor acting credits in Venezuelan theater, TV, commercials, and radio. Michelle's fluent in Spanish, English, Italian and speaks intermediate French.`,
      es: 'Michelle también participó en el programa intensivo de verano de actuación de la American Academy of Dramatic Arts en Los Ángeles, California (2015). Participó en teatro, televisión, comerciales y radio venezolanos. Michelle habla español, inglés, italiano y francés.',
    },
    title: 'Michelle Deniesse Lugo',
    titleClass: 'michelle',
    titleImage: MichelleTitle,
  },
];

export const missionVisionValues: MissionVisionValues = {
  mission: {
    en: 'Our mission is to connect the emotions and senses of people through audiovisual creations.',
    es: 'Nuestra misión es conectar las emociones y los sentidos de las personas a través de creaciones audiovisuales.',
  },
  values: {
    en: 'At Shanelle Productions LLC we believe in quality, creativity, innovation, passion, love, positivity, optimism, diversity, honesty, loyalty, growth, respect, kindness, commitment, learning, determination, recognition, security, independence, excellence, enjoyment, gratitude, empowerment, freedom, peace, resilience, change and inspiration.',
    es: 'En Shanelle Productions LLC creemos en la calidad, la creatividad, la innovación, la pasión, el amor, el positivismo, el optimismo, la diversidad, la honestidad, la lealtad, el crecimiento, el respeto, la amabilidad, el compromiso, el aprendizaje, la determinación, el reconocimiento, la seguridad, la independencia, la excelencia, el disfrute, la gratitud, el empoderamiento, la libertad,  la resiliencia, el cambio y la inspiración.',
  },
  vision: {
    en: 'Our vision is to be a production company that helps people communicate through audiovisual art.',
    es: 'Nuestra visión es ser una productora que ayude a las personas a comunicarse a través del arte audiovisual.',
  },
};
