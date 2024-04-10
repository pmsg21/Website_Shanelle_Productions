// ASSETS
import Facebook from '../assets/images/icons/facebook.svg';
import Instagram from '../assets/images/icons/instagram.svg';
import TikTok from '../assets/images/icons/tik-tok.svg';
import Twitter from '../assets/images/icons/twitter.svg';
import Youtube from '../assets/images/icons/youtube.svg';

interface FooterLink {
  alt: string;
  img: string;
  url: string;
}

export const footerLinks: FooterLink[] = [
  {
    alt: 'Instragram',
    img: Instagram,
    url: 'https://www.instagram.com/shanelleprod',
  },
  {
    alt: 'Facebook',
    img: Facebook,
    url: 'https://www.facebook.com/shanelleprod',
  },
  {
    alt: 'TikTok',
    img: TikTok,
    url: 'https://www.tiktok.com/@shanelleprod',
  },
  {
    alt: 'Twitter',
    img: Twitter,
    url: 'https://twitter.com/shanelleprod',
  },
  {
    alt: 'Youtube',
    img: Youtube,
    url: 'https://www.youtube.com/channel/UCV2U3zcCVmNSpYkoe7hBQcQ',
  },
];
