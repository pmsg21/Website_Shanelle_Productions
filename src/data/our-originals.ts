// INTERFACES
import {
  OurOriginals,
  OurOriginalSeries,
  OurOriginalsParagraphs,
  OurOriginalsSocialMediaParagraphs,
} from "../interfaces/our-originals";

// ASSETS
import Astrosaaurus from "../assets/images/our-originals/astrosaaurus.png";
import Facebook from "../assets/images/our-originals/facebook.svg";
import HearYouLater from "../assets/images/our-originals/hearyoulater.png";
import Instagram from "../assets/images/our-originals/instagram.svg";
import TikTok from "../assets/images/our-originals/tiktok.svg";
import Youtube from "../assets/images/our-originals/youtube.svg";
import ElixirBanner from "../assets/images/our-originals/elixir-banner.png";
import ElixirLogo from "../assets/images/our-originals/elixir-logo.svg";
import AgainBanner from "../assets/images/our-originals/again-banner.png";
import AgainLogo from "../assets/images/our-originals/again-logo.svg";
import DirectHitIcon from "../assets/images/our-originals/direct-hit-icon.svg";
import SportsMedalIcon from "../assets/images/our-originals/sports-medal-icon.svg";
import FirstPlaceMedalIcon from "../assets/images/our-originals/1st-place-medal-icon.svg";
import ClapperboardIcon from "../assets/images/our-originals/clapperboard-icon.svg";
import MilitaryMedalIcon from "../assets/images/our-originals/military-medal-icon.svg";
import MovieCameraIcon from "../assets/images/our-originals/movie-camera-icon.svg";
import SparklesIcon from "../assets/images/our-originals/sparkles-icon.svg";

export const ourOriginals: OurOriginals[] = [
  {
    at: "@astrosaaurus",
    id: 1,
    image: Astrosaaurus,
    imageAlt: "Astrosaaurus",
    instagramURL: "https://www.instagram.com/astrosaaurus/",
    tiktokUrl: "https://www.tiktok.com/@astrosaaurus",
  },
  {
    at: "@hearyoulater",
    id: 2,
    image: HearYouLater,
    imageAlt: "HearYouLater",
    instagramURL: "https://www.instagram.com/hearyoulater/",
    tiktokUrl: "https://www.tiktok.com/@hearyoulater",
  },
];

export const ourOriginalSeries: OurOriginalSeries[] = [
  {
    awards: [
      {
        image: DirectHitIcon,
        imageAlt: "Direct Hit Icon Elixir: After Time",
        text: {
          en: "Best Web Series Pilot – Global Visionaries Film Festival (2025)",
          es: "Best Web Series Pilot – Global Visionaries Film Festival (2025)",
        },
      },
      {
        image: SportsMedalIcon,
        imageAlt: "Sports Medal Icon Elixir: After Time",
        text: {
          en: "Best TV Pilot/Web Series – Kraken International Film Festival (2025)",
          es: "Best TV Pilot/Web Series – Kraken International Film Festival (2025)",
        },
      },
      {
        image: FirstPlaceMedalIcon,
        imageAlt: "First Place Medal Icon Elixir: After Time",
        text: {
          en: "Best Episodic Television – Bangkok Movie Awards (2024)",
          es: "Best Episodic Television – Bangkok Movie Awards (2024)",
        },
      },
      {
        image: FirstPlaceMedalIcon,
        imageAlt: "First Place Medal Icon Elixir: After Time",
        text: {
          en: "Best LGBTQ – California Indies Festival (2025)",
          es: "Best LGBTQ – California Indies Festival (2025)",
        },
      },
      {
        image: ClapperboardIcon,
        imageAlt: "Clapperboard Icon Elixir: After Time",
        text: {
          en: "Best Female Filmmaker – The Mermaid Film Festival (2025)",
          es: "Best Female Filmmaker – The Mermaid Film Festival (2025)",
        },
      },
      {
        image: FirstPlaceMedalIcon,
        imageAlt: "First Place Medal Icon Elixir: After Time",
        text: {
          en: "Best Short Series – Cult Movies International Film Festival (2025)",
          es: "Best Short Series – Cult Movies International Film Festival (2025)",
        },
      },
      {
        image: MilitaryMedalIcon,
        imageAlt: "Military Medal Icon Elixir: After Time",
        text: {
          en: "Best Female Director Nominee – New York Shorts Awards (2025)",
          es: "Best Female Director Nominee – New York Shorts Awards (2025)",
        },
      },
      {
        image: MilitaryMedalIcon,
        imageAlt: "Military Medal Icon Elixir: After Time",
        text: {
          en: "Best TV Series-Web-Pilot Nominee – New York Independent Cinema Awards (2025)",
          es: "Best TV Series-Web-Pilot Nominee – New York Independent Cinema Awards (2025)",
        },
      },
      {
        image: MovieCameraIcon,
        imageAlt: "Movie Camera Icon Elixir: After Time",
        text: {
          en: "Best LGBTQ+ Narrative Finalist - Silverlens Film Awards (2025)",
          es: "Best LGBTQ+ Narrative Finalist - Silverlens Film Awards (2025)",
        },
      },
      {
        image: SparklesIcon,
        imageAlt: "Sparkles Icon Elixir: After Time",
        text: {
          en: "Best LGBTQ+ Narrative Finalist - Elegant International Film Festival (2025)",
          es: "Best LGBTQ+ Narrative Finalist - Elegant International Film Festival (2025)",
        },
      },
      {
        image: MilitaryMedalIcon,
        imageAlt: "Military Medal Icon Elixir: After Time",
        text: {
          en: "Best TV Series-Web-Pilot Nominee - New York Independent Awards (2025)",
          es: "Best TV Series-Web-Pilot Nominee - New York Independent Awards (2025)",
        },
      },
    ],
    banner: ElixirBanner,
    bannerAlt: "Elixir: After Time - Banner",
    credits: {
      en: "Our credits span a range of roles, including actresses, directors, producers, editors, sound designers, and colorists, all contributing to this unique and compelling series that resonates with viewers.",
      es: "Nuestros créditos abarcan una amplia gama de roles, incluyendo actrices, directoras, productoras, editoras, diseñadoras de sonido y coloristas, todo contribuyendo a esta serie única y cautivadora que resuena con el público.",
    },
    description: {
      en: "Elixir: After Time is a captivating mystery sapphic series in Latin American Spanish, filmed in the scenic landscapes of Tennessee. This fully independent production was created entirely by the two of us, with every step—from pre-production to post-production—handled in-house. The series delves into themes of past lives, reincarnation, and magic, weaving a rich narrative that explores the mystical and mysterious. During filming, we brought in one additional key member, our talented cameraman and director of photography, to help bring our vision to life.",
      es: "Elixir: After Time es una cautivadora serie sáfica de misterio en español latinoamericano, filmada en los pintorescos paisajes de Tennessee. Esta producción completamente independiente fue creada íntegramente por nosotras dos, gestionando cada paso, desde la preproducción hasta la postproducción, de manera interna. La serie aborda temas como vidas pasadas, reencarnación y magia, tejiendo una rica narrativa que explora lo místico y lo misterioso. Durante el rodaje, incorporamos a un miembro clave adicional: nuestro talentoso camarógrafo y director de fotografía, quien nos ayudó a dar vida a nuestra visión.",
    },
    id: 1,
    imdbLink:
      "https://www.imdb.com/es/title/tt34215865/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_elixir",
    logo: ElixirLogo,
    logoAlt: "Elixir: After Time - Logo",
    trailerLink:
      "https://www.youtube.com/embed/b-HUg02nleE?si=azOBH5XJeS46CUA2",
    views: "4.3MM",
    watchLink:
      "https://www.youtube.com/playlist?list=PL-NkjSbA8EyHNSYsJSe5tfbeTSFY6wzl4",
  },
  {
    awards: [
      {
        image: DirectHitIcon,
        imageAlt: "Direct Hit Icon Again The Series",
        text: {
          en: "Best Web Series – Shunyatam International Film Festival (2024)",
          es: "Best Web Series – Shunyatam International Film Festival (2024)",
        },
      },
      {
        image: SportsMedalIcon,
        imageAlt: "Sports Medal Icon Again The Series",
        text: {
          en: "Best LGBTQ+ Narrative – Elegant International Film Festival (2025)",
          es: "Best LGBTQ+ Narrative – Elegant International Film Festival (2025)",
        },
      },
      {
        image: FirstPlaceMedalIcon,
        imageAlt: "First Place Medal Icon Again The Series",
        text: {
          en: "Best Web Series – Cult Movies International Film Festival (2025)",
          es: "Best Web Series – Cult Movies International Film Festival (2025)",
        },
      },
      {
        image: SparklesIcon,
        imageAlt: "Sparkles Icon Again The Series",
        text: {
          en: "Best Web Series Nominee – New York Shorts Awards (2025)",
          es: "Best Web Series Nominee – New York Shorts Awards (2025)",
        },
      },
      {
        image: ClapperboardIcon,
        imageAlt: "Clapperboard Icon Again The Series",
        text: {
          en: "Best Female Filmmaker Finalist - The Mermaid Film Festival (2025)",
          es: "Best Female Filmmaker Finalist - The Mermaid Film Festival (2025)",
        },
      },
      {
        image: MilitaryMedalIcon,
        imageAlt: "Military Medal Icon Again The Series",
        text: {
          en: "Official Selection - Niagara Canada International Film Festival (2025)",
          es: "Official Selection - Niagara Canada International Film Festival (2025)",
        },
      },
      {
        image: MilitaryMedalIcon,
        imageAlt: "Military Medal Icon Again The Series",
        text: {
          en: "Best Web Series Pilot Finalist - Global Visionaries Film Festival (2025)",
          es: "Best Web Series Pilot Finalist - Global Visionaries Film Festival (2025)",
        },
      },
      {
        image: MovieCameraIcon,
        imageAlt: "Movie Camera Icon Again The Series",
        text: {
          en: "Official Selection - Pickering Canada International Film Festival (2025)",
          es: "Official Selection - Pickering Canada International Film Festival (2025)",
        },
      },
      {
        image: SparklesIcon,
        imageAlt: "Sparkles Icon Again The Series",
        text: {
          en: "Best LGBTQ+ Narrative Finalist - Silverlens Film Awards (2025)",
          es: "Best LGBTQ+ Narrative Finalist - Silverlens Film Awards (2025)",
        },
      },
    ],
    banner: AgainBanner,
    bannerAlt: "Again The Series - Banner",
    credits: {
      en: "Our credits range from actresses, directors, and producers to editors, sound designers, colorist and more.",
      es: "Nuestros créditos van desde actrices, directoras, productoras, hasta editoras, diseñadoras sonoras y coloristas.",
    },
    description: {
      en: "Again The Series (Tú Otra Vez) is the first Asian GL-style (or sapphic series) in Latin American Spanish. Filmed in New York City, it is a production we carried out almost entirely on our own. We handled the entire pre-production process independently, then during production, we had one additional person: our cameraman and director of photography. Finally, we managed the entire post-production process ourselves once again.",
      es: "Again The Series (Tú Otra Vez) es la primera serie al estilo GL asiática, pero en Español Latino. Filmada en New York, es una producción que realizamos nosotras prácticamente solas, ya que llevamos a cabo todo el proceso de pre-producción completamente solas, luego en la producción contamos con una persona más: nuestro camarógrafo y director de fotografía, y finalmente en la post-producción estuvimos haciendo todo el proceso solas nuevamente. ",
    },
    id: 2,
    imdbLink: "https://www.imdb.com/es/title/tt32811959/?ref_=tt_mlt_tt_i_1",
    logo: AgainLogo,
    logoAlt: "Again The Series - Logo",
    trailerLink:
      "https://www.youtube.com/embed/gJe__OJysHA?si=T76pYu4banQclQr-",
    views: "5.8MM",
    watchLink:
      "https://www.youtube.com/playlist?list=PL-NkjSbA8EyGC95d-3Fig6ULjNpHfohVO",
  },
];

export const ourOriginalsParagraphs: OurOriginalsParagraphs = {
  firstParagraph: {
    en: "As part of our original series we have also made original soundtracks and music videos. These accompass our habilities with singing, sound post production, video filming and editing.",
    es: "Como parte de nuestras series originales, también hemos creado canciones originales y videos musicales. Estos reflejan nuestras habilidades en canto, postproducción de sonido, filmación y edición de video.",
  },
  secondParagraph: {
    en: `Where did we get our passion for content creation from? How did we realize that we could combine our talents to create something unique? Why did get into audiovisual production in the first place? Well, it all started with music, but that's a story we'll tell you later. In the meantime, check out some of our music and favorite tunes.`,
    es: "¿De dónde sacamos nuestra pasión por la creación de contenido? ¿Cómo nos dimos cuenta de que podíamos combinar nuestros talentos para crear algo único? ¿Por qué elegimos la producción audiovisual en primer lugar? Bueno, todo empezó con la música, pero esa es una historia que te contaremos más adelante. Mientras tanto, echa un vistazo a nuestra música y canciones favoritas.",
  },
  thirdParagraph: {
    en: `We have other exciting and fun projects we've been creating during our audiovisual journeys and work travels. We are exploring the USA to find the unique soundscapes of each region, town, and city, and we do the same with the image. We believe that because we can experience an ambiance and a sight firsthand, we are able to bring a unique point of view and sound knowledge to each audiovisual project.`,
    es: "Tenemos otros proyectos emocionantes que hemos ido creando durante nuestros viajes de trabajo. Estamos explorando los EEUU para encontrar los paisajes sonoros únicos de cada región, pueblo y ciudad, y hacemos lo mismo con la imagen. Creemos que, porque podemos experimentar un ambiente sonoro y un paisaje de primera mano, podemos aportar un punto de vista único y un conocimiento sonoro a cada proyecto audiovisual.",
  },
};

export const ourOriginalsSocialMediaParagraphs: OurOriginalsSocialMediaParagraphs =
  {
    socialMediaHeader: {
      en: "Our work has granted us...",
      es: "Nuestro trabajo nos ha conseguido...",
    },
    socialMedia: [
      {
        animationDelay: "animate__delay-1-5s",
        followers: {
          en: "+ 111K followers",
          es: "+ 111K seguidores",
        },
        icon: TikTok,
        id: 1,
        likesAndViews: {
          en: "+ 3.1MM likes",
          es: "+ 3.1MM me gusta",
        },
        link: "https://www.tiktok.com/@shanelleprod",
        title: "Tiktok",
      },
      {
        animationDelay: "animate__delay-2s",
        followers: {
          en: "+ 107K followers",
          es: "+ 107K seguidores",
        },
        icon: Youtube,
        id: 2,
        likesAndViews: {
          en: "+ 22MM views",
          es: "+ 22MM vistas",
        },
        link: "https://www.youtube.com/channel/UCV2U3zcCVmNSpYkoe7hBQcQ",
        title: "Youtube",
      },
      {
        animationDelay: "animate__delay-2-5s",
        followers: {
          en: "+ 37K followers",
          es: "+ 37K seguidores",
        },
        icon: Instagram,
        id: 3,
        likesAndViews: {
          en: "+ 980K likes",
          es: "+ 980K me gusta",
        },
        link: "https://www.instagram.com/shanelleprod",
        title: "Instagram",
      },
      {
        animationDelay: "animate__delay-3s",
        followers: {
          en: "+ 36K followers",
          es: "+ 36K seguidores",
        },
        icon: Facebook,
        id: 4,
        likesAndViews: {
          en: "+ 330K likes",
          es: "+ 330K me gusta",
        },
        link: "https://www.facebook.com/shanelleprod",
        title: "Facebook",
      },
    ],
    socialMediaDescription: {
      en: "We started our social media by showing some of our dubbing skills in shorts and reels (fandubs) of our favorite TV series (that didn’t have a Spanish dub), promoting our work, and allowing fans to hear their favorite characters in their own language. This is how we built a community of people who share our interests and like and follow our work.",
      es: "Comenzamos nuestras redes sociales mostrando algunas de nuestras habilidades doblando shorts y reels (fandubs) de nuestras series de TV favoritas que no tenían doblaje al español, promocionando nuestro trabajo y dándole la oportunidad a los fans de escuchar a sus personajes favoritos en su propio idioma. Así creamos una comunidad de personas que comparten nuestros intereses y les gusta y siguen nuestro trabajo.",
    },
    socialMediaFooter: {
      en: "All of our work is made with LOVE. Follow us in all of our social media to see more.",
      es: "Todo nuestro trabajo está hecho con AMOR. Síguenos en nuestras redes sociales para más contenido.",
    },
    socialMediaYoutubePlaque: {
      en: "In May 2025, Shanelle Productions Official reached over 100,000 subscribers and received the YouTube Silver Creator Award. This achievement celebrates not only the channel's growth but also the support of a global community that connects with our stories.",
      es: "En mayo de 2025, Shanelle Productions Official alcanzó más de 100,000 suscriptores y recibió el YouTube Silver Creator Award. Este logro celebra no solo el crecimiento del canal, sino también el apoyo de una comunidad global que conecta con nuestras historias.",
    },
  };
