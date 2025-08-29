// INTERFACES
import { MissionVisionValues, AboutTeamMembers } from "../interfaces/about";

// ASSETS
import Andres from "../assets/images/about/andres.png";
import Chloe from "../assets/images/about/chloe.png";
import Enzo from "../assets/images/about/enzo.png";
import Ermarina from "../assets/images/about/ermarina.png";
import Denisse from "../assets/images/about/denisse.png";
import Nestor from "../assets/images/about/nestor.png";
import Oriana from "../assets/images/about/oriana.png";
import Pablo from "../assets/images/about/pablo.png";
import Daniela from "../assets/images/about/daniela.png";

import type { LanguageOptions } from "../interfaces/language";
import { aboutMichelleEnglish, aboutMichelleSpanish } from "./about-michelle";
import { aboutShanaEnglish, aboutShanaSpanish } from "./about-shana";

export const missionVisionValues: MissionVisionValues = {
  mission: {
    en: "Our mission is to connect the emotions and senses of people through audiovisual creations.",
    es: "Nuestra misión es conectar las emociones y los sentidos de las personas a través de creaciones audiovisuales.",
  },
  values: {
    en: "At Shanelle Productions LLC we believe in quality, creativity, innovation, passion, love, positivity, optimism, diversity, honesty, loyalty, growth, respect, kindness, commitment, learning, determination, recognition, security, independence, excellence, enjoyment, gratitude, empowerment, freedom, peace, resilience, change and inspiration.",
    es: "En Shanelle Productions LLC creemos en la calidad, la creatividad, la innovación, la pasión, el amor, el positivismo, el optimismo, la diversidad, la honestidad, la lealtad, el crecimiento, el respeto, la amabilidad, el compromiso, el aprendizaje, la determinación, el reconocimiento, la seguridad, la independencia, la excelencia, el disfrute, la gratitud, el empoderamiento, la libertad,  la resiliencia, el cambio y la inspiración.",
  },
  vision: {
    en: "Our vision is to be a production company that helps people communicate through audiovisual art.",
    es: "Nuestra visión es ser una productora que ayude a las personas a comunicarse a través del arte audiovisual.",
  },
};

export const aboutTeamMembers: AboutTeamMembers = {
  michelle: {
    en: aboutMichelleEnglish,
    es: aboutMichelleSpanish,
  },
  shana: {
    en: aboutShanaEnglish,
    es: aboutShanaSpanish,
  },
  teamMembers: [
    {
      name: "Oriana Moniz",
      pic: Oriana,
      role: {
        en: "Graphic Designer",
        es: "Diseñadora Gráfica",
      },
    },
    {
      name: "Pablo Sierra",
      pic: Pablo,
      role: {
        en: "Web Developer",
        es: "Desarrollador Web",
      },
    },
    {
      name: "Nestor Caro",
      pic: Nestor,
      role: {
        en: "Sound Producer and Composer",
        es: "Productor de Sonido y Musicalizador",
      },
    },
    {
      name: "Andrés Henry",
      pic: Andres,
      role: {
        en: "Director of Photography, Cameraman, Gaffer",
        es: "Productor de Sonido y Musicalizador",
      },
    },
    {
      name: "Ermarina Tortolero",
      pic: Ermarina,
      role: {
        en: "Accountant & Human Resources Manager.",
        es: "Contabilidad y Recursos Humanos",
      },
    },
    {
      name: "Denisse Ramírez",
      pic: Denisse,
      role: {
        en: "Business and Production Advisor",
        es: "Asesora de Negocios y Producción",
      },
    },
    {
      name: "Daniela Ramírez",
      pic: Daniela,
      role: {
        en: "Photographer",
        es: "Fotógrafa",
      },
    },
    {
      name: "Chloe",
      pic: Chloe,
      role: {
        en: "Chief Security Officer",
        es: "Directora de Seguridad",
      },
    },
    {
      name: "Enzo",
      pic: Enzo,
      role: {
        en: "Chief Congeniality Officer",
        es: "Director de Simpatía",
      },
    },
  ],
};

export const aboutAward: LanguageOptions = {
  en: "As social media content post-producers, Michelle and Alexandra have worked on several projects, highlighting their work for various YouTube channels. In 2020, Michelle and Alexandra received a YouTube Creator Award for their work on a renowned financial education platform.",
  es: "Como postproductoras de contenido de redes sociales, Michelle y Alexandra han trabajado en varios proyectos, destacando su trabajo para diversos canales de YouTube. En 2020, Michelle y Alexandra recibieron un YouTube Creator Award por su trabajo en una reconocida plataforma de educación financiera.",
};
