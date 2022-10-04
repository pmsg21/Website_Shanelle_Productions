import { Person } from '../interfaces/about';
import Michelle from '../assets/images/about/michelle-lugo-headshot.svg';
import MichellePhone from '../assets/images/about/michelle-lugo-headshot-phone.svg';
import MichelleTitle from '../assets/images/about/michelle-lugo.svg';
import Shana from '../assets/images/about/shana-pilonieta-headshot.svg';
import ShanaPhone from '../assets/images/about/shana-pilonieta-headshot-phone.svg';
import ShanaTitle from '../assets/images/about/shana-pilonieta.svg';

export const persons: Person[] = [
  {
    firstParagraph:
      'Alexandra "Shana" is a Venezuelan sound designer, sound producer, voice artist, singer, social media video editor, and social media content post-producer.',
    id: 1,
    image: Shana,
    imageAlt: 'Shana Headshot',
    imagePhone: ShanaPhone,
    imdb: 'https://www.imdb.com/name/nm10097060/?ref_=nv_sr_srsg_0',
    secondParagraph: `She was born and raised in Caracas, Venezuela. Fluent in English, Spanish, and speaks intermediate French. She's an Associate of Arts in Sound Design For Visual Media and Sound Production for Audiovisuals.`,
    thirdParagraph: `Awarded academic-based Honorific Mentions from 2017 to 2019, Best Short Film in an Audiovisual Marathon in 2016, and Best Sound for Sci-Fi Scene in 2017, among others. She's also known for pursuing a singing career in a renowned Venezuelan musical group from 2013 to 2016.`,
    title: 'Alexandra Alvarez Pilonieta',
    titleClass: 'shana',
    titleImage: ShanaTitle,
  },
  {
    firstParagraph: `Michelle is a Venezuelan sound designer, sound producer, voice artist, and social media content post-producer. Michelle's an Associate of Arts in Sound Production and Sound Design For Visual Media.`,
    id: 2,
    image: Michelle,
    imageAlt: 'Michelle Headshot',
    imagePhone: MichellePhone,
    imdb: 'https://www.imdb.com/name/nm10097059/?ref_=nv_sr_srsg_0',
    secondParagraph:
      'During her time as a college student she was awarded Best Sound Art (2017), Best Sound Design for a Commercial (2018), Best Short Film in an Audiovisual Marathon (2016), and multiple GPA-based Honorific Mentions (2016-2019).',
    thirdParagraph: `Michelle also participated in the acting summer intensive program of The American Academy of Dramatic Arts in Los Angeles, California (2015), and has minor acting credits in Venezuelan theater, TV, commercials, and radio. Michelle's fluent in Spanish, English, Italian and speaks intermediate French.`,
    title: 'Michelle Deniesse Lugo',
    titleClass: 'michelle',
    titleImage: MichelleTitle,
  },
];
