// INTERFACES
import { Press } from "../interfaces/press";

// ASSETS
import AgainElixirSeries from "../assets/images/press/again-elixir-series.png";
import AgainTheSeries from "../assets/images/press/again-the-series.png";
import AudioEngineeringSociety from "../assets/images/press/audio-engineering-society.png";
import AudiovisualTalent from "../assets/images/press/audiovisual-talent.png";
import HighwayOne from "../assets/images/press/highway-1.png";
import IndependentCinema from "../assets/images/press/independent-cinema.png";
import LatinaCreators from "../assets/images/press/latina-creators.png";
import MadLove from "../assets/images/press/mad-love.png";
import MadLoveSong from "../assets/images/press/mad-love-song.png";
import MarriedCreators from "../assets/images/press/married-creators.png";
import MichelleInterview from "../assets/images/press/michelle-interview.png";
import OaxacaFilmfest from "../assets/images/press/oaxaca-filmfest.png";
import OmniaAlbum from "../assets/images/press/omnia-album.png";
import QaWithActresses from "../assets/images/press/qa-with-actresses.png";
import Shanelle from "../assets/images/press/shanelle.png";
import ShanelleProductions from "../assets/images/press/shanelle-productions.png";
import VenezuelanCreators from "../assets/images/press/venezuelan-creators.png";
import WizzardFtShanelle from "../assets/images/press/wizzard-ft-shanelle.png";

export const press: Press[] = [
  {
    id: "MarriedCreators",
    alt: "MarriedCreators",
    image: MarriedCreators,
    text: {
      en: "These married female creators reached 2 million views with one pilot episode. Top 12 Questions with Michelle and Shana, creators of Shanelle Productions and series Elixir: After Time.",
      es: "Esta pareja de creadoras alcanzó los 2 millones de visualizaciones con un episodio piloto. Las 12 preguntas más frecuentes con Michelle y Shana, creadoras de Shanelle Productions y la serie Elixir: After Time.",
    },
    url: "https://www.krakenfilmfest.com/interviews/michandshana",
  },
  {
    id: "IndependentCinema",
    alt: "IndependentCinema",
    image: IndependentCinema,
    text: {
      en: "In the competitive world of American independent cinema, two Venezuelan artists are leaving an indelible mark through their talent in sound design: Michelle and Alexandra “Shana”, creators, producers, and sound designers whose work has resonated in the film industry and at prestigious festivals around the world.",
      es: "En el competitivo cine independiente estadounidense, las venezolanas Michelle Deniesse Lugo y Alexandra “Shana” Álvarez Pilonieta destacan como creadoras, productoras y diseñadoras de sonido, con una obra que ha resonado en la industria y en prestigiosos festivales internacionales.",
    },
    urls: [
      {
        id: 1,
        title: "INTERVEZ",
        url: "https://intervez.com/artistas-venezolanas-brillan-en-el-hollywood-independiente-el-sonido-que-conquista-festivales-internacionales/",
      },
      {
        id: 2,
        title: "VIDA Y ARTE",
        url: "https://www.vidayarte.com/artes/artistas-venezolanas-brillan-en-el-cine-de-hollywood",
      },
      {
        id: 3,
        title: "QUE TAL ESPECTÁCULOS",
        url: "https://quetalespectaculos.wordpress.com/2025/08/14/artistas-venezolanas-brillan-en-el-hollywood-independiente-el-sonido-que-conquista-festivales-internacionales/",
      },
    ],
    hasModal: true,
  },
  {
    id: "VenezuelanCreators",
    alt: "VenezuelanCreators",
    image: VenezuelanCreators,
    text: {
      en: "Venezuelan creators Michelle Deniesse Lugo and Alexandra “Shana” Álvarez Pilonieta earned YouTube’s prestigious Silver Creator Award in May 2025 after their channel, Shanelle Productions Official, surpassed 100,000 subscribers—adding to the global success of their original productions.",
      es: "Las venezolanas Michelle Deniesse Lugo y Alexandra “Shana” Álvarez Pilonieta recibieron en mayo de 2025 el prestigioso YouTube Silver Creator Award tras superar los 100,000 suscriptores en su canal Shanelle Productions Official, sumando este logro al éxito internacional de sus dos producciones originales.",
    },
    urls: [
      {
        id: 1,
        title: "INTERVEZ",
        url: "https://intervez.com/michelle-deniesse-y-shana-pilonieta-reciben-el-youtube-creator-award-por-100000-suscriptores/",
      },
      {
        id: 2,
        title: "QUE TAL ESPECTÁCULOS",
        url: "https://quetalespectaculos.wordpress.com/2025/08/26/michelle-deniesse-y-shana-pilonieta-reciben-el-youtube-creator-award-por-100000-suscriptores/",
      },
    ],
    hasModal: true,
  },
  {
    id: "LatinaCreators",
    alt: "LatinaCreators",
    image: LatinaCreators,
    text: {
      en: `Latina creators Michelle Deniesse Lugo and Alexandra “Shana” Álvarez Pilonieta have emerged as leading voices in Spanish-language independent film, with over 20 million YouTube views, numerous awards, and official selections at prestigious international festivals recognizing their innovative work.`,
      es: "Con más de 20 millones de visualizaciones en YouTube y numerosos premios y selecciones en prestigiosos festivales internacionales, las venezolanas Michelle Deniesse Lugo y Alexandra “Shana” Álvarez Pilonieta se han consolidado como dos de las voces más innovadoras del audiovisual independiente en español.",
    },
    urls: [
      {
        id: 1,
        title: "QUE TAL ESPECTÁCULOS",
        url: "https://quetalespectaculos.wordpress.com/2025/08/26/creadoras-latinas-que-conquistan-la-escena-audiovisual-internacional/",
      },
      {
        id: 2,
        title: "CIUDAD MCY",
        url: "https://ciudadmcy.info.ve/creadoras-latinas-conquistan-la-escena-audiovisual-internacional",
      },
    ],
    hasModal: true,
  },
  {
    id: "MichelleInterview",
    alt: "MichelleInterview",
    image: MichelleInterview,
    text: {
      en: "Interviewing actress and producer Michelle Deniesse",
      es: "Entrevista a la actriz y productora Michelle Deniesse",
    },
    url: "https://adreamcalledcinema.blogspot.com/2025/05/interviewing-actress-and-producer.html?m=1",
  },
  {
    id: "AgainElixirSeries",
    alt: "AgainElixirSeries",
    image: AgainElixirSeries,
    text: {
      en: `Michelle and Alexandra, talented producers, sound designers, and Venezuelan creators, have conquered the international scene with their web series "Again The Series (You Again)" and "Elixir: After Time," productions that have been recognized and awarded at prestigious film festivals.`,
      es: "Michelle y Alexandra, talentosas productoras, diseñadoras de sonido y creadoras venezolanas, han conquistado el panorama internacional con sus series web «Again The Series (Tú Otra Vez)» y «Elixir: After Time», producciones que han sido reconocidas y premiadas en destacados festivales de cine.",
    },
    urls: [
      {
        id: 1,
        title: "A RUMBEAR",
        url: "https://arumbear.com/ve/archivos/44427",
      },
      {
        id: 2,
        title: "NOTICIAS VENEVISION",
        url: "https://noticiasvenevision.com/noticias/entretenimiento/productoras-y-actrices-venezolanas-triunfan-en-festivales-de-cine-internacionales-con-sus-series",
      },
      {
        id: 3,
        title: "QUE TAL ESPECTÁCULOS",
        url: "https://quetalespectaculos.wordpress.com/2025/02/04/productoras-y-actrices-venezolanas-triunfan-en-festivales-de-cine-internacionales-con-sus-series-originales/",
      },
    ],
    hasModal: true,
  },
  {
    id: "QaWithActresses",
    alt: "QaWithActresses",
    image: QaWithActresses,
    text: {
      en: "“Q&A with Actresses Michelle Deniesse & Shana Pilonieta”. The stars of Again The Series, who are also the founders of Shanelle Productions, share their insights. I had the opportunity to connect with them and ask a few questions about their series and what they love most about their characters.",
      es: "“Entrevista con las actrices Michelle Deniesse y Shana Pilonieta”. Las protagonistas de Again The Series, y fundadoras de Shanelle Productions, comparten sus perspectivas. Tuve la oportunidad de conversar con ellas y hacerles algunas preguntas sobre sus series y lo que más aman de sus personajes.",
    },
    url: "https://lgbt-daily.com/f/qa-with-actresses-michelle-deniesse-shana-pilonieta",
  },
  {
    id: "AgainTheSeries",
    alt: "AgainTheSeries",
    image: AgainTheSeries,
    text: {
      en: `Shanelle Productions announces the release of its original series "Again The Series (Tú Otra Vez)"; a Spanish-language series inspired by popular Asian GL (Girls' Love) series. It presents a captivating storyline that explores love, second chances, personal growth, and the importance of communication.`,
      es: `Shanelle Productions anuncia el lanzamiento de su serie original "Again The Series (Tú Otra Vez)"; una serie en español inspirada en las populares series GL (Girls' Love) asiáticas. Presenta una cautivadora trama que explora el amor, las segundas oportunidades, el crecimiento personal y la importancia de la comunicación.`,
    },
    urls: [
      {
        id: 1,
        title: "TENDENCIA INTERNACIONAL",
        url: "https://www.tendenciainternacional.com/2024/09/25/michelle-deniesse-y-shana-pilonieta-lanzan-su-serie-web-original-again-the-series-tu-otra-vez-con-exito-rotundo/",
      },
      {
        id: 2,
        title: "INTERVEZ",
        url: "https://intervez.com/michelle-deniesse-y-shana-pilonieta-lanzan-su-serie-web-original-again-the-series-tu-otra-vez-con-exito-rotundo/",
      },
      {
        id: 3,
        title: "NOTICIAS VENEVISION ",
        url: "https://noticiasvenevision.com/noticias/entretenimiento/michelle-deniesse-y-shana-pilonieta-lanzan-su-serie-again-the-series",
      },
    ],
    hasModal: true,
  },
  {
    id: "AudiovisualTalent",
    alt: "AudiovisualTalent",
    image: AudiovisualTalent,
    text: {
      en: "The social media of Shana Pilonieta and Michelle Deniesse, founders of Shanelle Productions, showcase their talent as content creators. Through their voice and acting skills, they've won over millions and received multiple nominations and awards at international festivals.",
      es: "Las plataformas digitales de Shana Pilonieta y Michelle Deniesse, fundadoras de Shanelle Productions, muestran su talento como creadoras de contenido; con sus habilidades vocales y de actuación, han conquistado a millones de personas y recibido múltiples nominaciones y premios en festivales internacionales.",
    },
    urls: [
      {
        id: 1,
        title: "NOTICIAS VENEVISIÓN",
        url: "https://noticiasvenevision.com/noticias/entretenimiento/shana-pilonieta-y-michelle-deniesse-fronteras-con-su-talento-audiovisual",
      },
      {
        id: 2,
        title: "NOTI-AMÉRICA",
        url: "https://noti-america.com/site/venezuela/2024/05/03/shana-pilonieta-y-michelle-deniesse-rompen-fronteras-con-su-talento-audiovisual/",
      },
      {
        id: 3,
        title: "ENTÉRATE 24",
        url: "https://enterate24.com/shana-pilonieta-y-michelle-deniesse-rompen-fronteras-con-su-talento-audiovisual/",
      },
      {
        id: 4,
        title: "NOTITARDE",
        url: "https://www.notitarde.com.ve/espectaculos/48675/shana-pilonieta-y-michelle-deniesse-rompen-fronteras-con-su-talento-audiovisual",
      },
      {
        id: 5,
        title: "CARACAS NEWS 24",
        url: "https://caracasnews24.com/shana-pilonieta-y-michelle-deniesse-rompen-fronteras-con-su-talento-audiovisual/",
      },
      {
        id: 6,
        title: "EL PERIODIQUITO",
        url: "https://elperiodiquito.com/mas/escenario/163290/shana-pilonieta-y-michelle-deniesse-rompen-fronteras-con-su-talento-audiovisual/",
      },
      {
        id: 7,
        title: "EL ARAGÜEÑO",
        url: "https://elaragueno.com.ve/shana-pilonieta-y-michelle-deniesse-rompen-fronteras-con-su-talento-audiovisual/",
      },
      {
        id: 8,
        title: "COLOMBIA MUSIC INC",
        url: "https://www.colombiamusicinc.com/shana-pilonieta-y-michelle-deniesse-rompen-fronteras-con-su-talento-audiovisual/",
      },
    ],
    hasModal: true,
  },
  {
    id: "AudioEngineeringSociety",
    alt: "AudioEngineeringSociety",
    image: AudioEngineeringSociety,
    text: {
      en: "Michelle Deniesse and Shana Pilonieta, two formidable voices in sound production and dubbing, were recently appointed as voting members of the Audio Engineering Society (AES), a global network of audio professionals and winner of the Technical GRAMMY Award.",
      es: "Michelle Deniesse y Shana Pilonieta, dos voces formidables en la producción de sonido y doblaje, fueron recientemente nombradas como miembros votantes de la Audio Engineering Society (AES), una red global de profesionales del audio y ganadora del premio GRAMMY Técnico.",
    },
    url: "https://cactus24.com.ve/2024/04/30/productoras-de-sonido-wenezolanas-elegidas-como-miembros-votantes-de-la-audio-engineering-society/",
  },
  {
    id: "Shanelle",
    alt: "Shanelle",
    image: Shanelle,
    text: {
      en: `“We believe that everyone's voice deserves to be heard, and we are committed to using our skills to make that happen” said Alexandra and Michelle. “We want to work with projects that have a positive impact on society and help promote diversity, growth, and inclusion.”`,
      es: "“Creemos que la voz de todos merece ser escuchada y estamos comprometidas a usar nuestras habilidades para que eso suceda”, dijeron Alexandra y Michelle. “Queremos trabajar con proyectos que tengan un impacto positivo en la sociedad y ayuden a promover la diversidad, el crecimiento y la inclusión”.",
    },
    urls: [
      {
        id: 1,
        title: "BEZINGA",
        url: "https://www.benzinga.com/pressreleases/23/04/ab31670733/shanelle-productions-the-sound-of-peoples-emotions-through-audiovisual-creations",
      },
      {
        id: 2,
        title: "DIGITAL JOURNAL",
        url: "https://www.digitaljournal.com/pr/news/shanelle-productions-the-sound-of-people-s-emotions-through-audiovisual-creations",
      },
      {
        id: 3,
        title: "THE CHRONICLE JOURNAL",
        url: "https://markets.chroniclejournal.com/chroniclejournal/article/getnews-2023-4-4-shanelle-productions-the-sound-of-peoples-emotions-through-audiovisual-creations/",
      },
    ],
    hasModal: true,
  },
  {
    id: "HighwayOne",
    alt: "HighwayOne",
    image: HighwayOne,
    text: {
      en: "“I think the music (by Maesa Pullman & Dalal Bruchmann) and sound design (by Shanelle) are a highlight of this film. Our composers and sound designers were all women!”",
      es: "“Creo que la música (de Maesa Pullman y Dalal Bruchmann) y el diseño de sonido (de Shanelle) son lo más destacado de esta película. ¡Nuestras compositoras y diseñadoras de sonido eran todas mujeres!”.",
    },
    url: "https://thedrillmag.com/exclusive-trailer-release-vintage-nye-house-party-highway-one/",
  },
  {
    id: "OaxacaFilmfest",
    alt: "OaxacaFilmfest",
    image: OaxacaFilmfest,
    text: {
      en: "“Shanelle arrives at international film festivals. Memorama a short film by Daniel Larios, where Alexandra & Michelle are involved in the sound editing, is quite a sensation at many film festivals.”",
      es: "“Shanelle llega a los festivales internacionales de cine. Memorama, un cortometraje de Daniel Larios, donde Alexandra y Michelle están involucradas en la edición de sonido, es toda una sensación en muchos festivales de cine”.",
    },
    url: "https://cactus24.com.ve/2019/12/14/shanelle-de-sello-venezolano-llega-a-festivales-de-cines-internacionales/",
  },
  {
    id: "OmniaAlbum",
    alt: "OmniaAlbum",
    image: OmniaAlbum,
    text: {
      en: "“Shanelle, ready to conquer the world with Omnia, their new experimental album. Their college graduation with honors closes a time in which awards and recognitions were not oblivious to them. Several months ago they decided to explore new horizons to exploit their talent.”",
      es: "“Shanelle, listas para conquistar el mundo con Omnia, su nuevo álbum experimental. Su graduación universitaria con honores cierra una época en la que los premios y reconocimientos no les fueron ajenos. Hace varios meses decidieron explorar nuevos horizontes para explotar su talento”.",
    },
    url: "https://cactus24.com.ve/2019/08/26/shanelle-el-duo-musical-venezolano-dispuesto-a-conquistar-el-mundo-con-omnia-su-nuevo-album-experimental/",
  },
  {
    id: "MadLoveSong",
    alt: "MadLoveSong",
    image: MadLoveSong,
    text: {
      en: "“Wizzard releases new single “Mad Love” featuring Shanelle and Tropicalize. It is the perfect soundtrack to express the madness of love and its consequences, intertwining its catchy melody with a message full of positivity.”",
      es: "“Wizzard lanza el nuevo sencillo “Mad Love” con Shanelle y Tropicalize. Es la banda sonora perfecta para expresar la locura del amor y sus consecuencias, entrelazando su contagiosa melodía con un mensaje lleno de positividad”.",
    },
    url: "https://venezuelaempresarial.com.ve/noticia.php?post=7169",
  },
  {
    id: "WizzardFtShanelle",
    alt: "WizzardFtShanelle",
    image: WizzardFtShanelle,
    text: {
      en: "“Wizzard released his first single of the year 2019: Mad Love, which he produced and composed with Tropicalize. The song has lyrics from the emerging group Shanelle.”",
      es: "“Wizzard lanzó su primer sencillo del año 2019: Mad Love, el cual produjo y compuso con Tropicalize. La canción tiene letra del grupo emergente Shanelle”.",
    },
    url: "https://revistaronda.net/wizzard-mas-empalagoso-y-muere/",
  },
  {
    id: "MadLove",
    alt: "MadLove",
    image: MadLove,
    text: {
      en: "“Mad Love” is Wizzard's new single featuring Shanelle. The musician continues to demonstrate his artistic quality, this time he does it with Tropicalize, and Shanelle wrote the lyrics for the song.",
      es: '"Mad Love" es el nuevo sencillo de Wizzard con Shanelle. El músico sigue demostrando su calidad artística, esta vez lo hace con Tropicalize, y Shanelle escribió la letra de la canción.',
    },
    url: "https://somosnoticias.com.ve/mad-love-el-nuevo-tema-de-wizzard-feat-shanelle/",
  },
  {
    id: "ShanelleProductions",
    alt: "ShanelleProductions",
    image: ShanelleProductions,
    text: {
      en: "“Michelle and Alexandra “Shana” decided to merge their names to create Shanelle, where they share content that is not only audiovisual but also musical, to show their great musical talent.”",
      es: "“Michelle y Alexandra “Shana” decidieron fusionar sus nombres para crear Shanelle, donde comparten contenido no solo audiovisual sino también musical, para mostrar su gran talento artístico”.",
    },
    url: "https://revistavenezolana.com/2018/04/somos-el-complemento-ideal-en-muchos-sentidos-shanelle-talento-venezolano-en-tierras-cafeteras/",
  },
];
