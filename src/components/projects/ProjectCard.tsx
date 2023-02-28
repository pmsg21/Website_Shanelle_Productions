import { Collapse, Image } from 'react-bootstrap';
import { Project } from '../../interfaces/project';
import { useLanguage } from '../../hooks/useLanguage';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useState } from 'react';
import LinkIcon from '../../assets/images/about/link.svg';
import { LanguageOptions } from '../../interfaces/language';

export const ProjectCard = ({
  alt,
  description,
  emphasisText,
  image,
  link,
  title,
}: Project) => {
  const [isOpen, setIsOpen] = useState(false);
  const { screenWidth } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  description[siteLanguage as keyof typeof description] =
    screenWidth < 1025
      ? description[siteLanguage as keyof typeof description]
          .substring(0, 1)
          .toLowerCase() +
        description[siteLanguage as keyof typeof description].substring(1)
      : description[siteLanguage as keyof typeof description];
  const moreText: LanguageOptions = {
    en: 'More',
    es: 'Más',
  };
  const lessText: LanguageOptions = {
    en: 'Less',
    es: 'Menos',
  };

  const getProjectFooter = () => {
    return (
      <div className={screenWidth < 1025 ? 'mt-4' : ''}>
        <p className="mb-0 shanelle-extra-bold-text">
          {emphasisText[siteLanguage as keyof typeof emphasisText]}
        </p>
        <p className="text-end mt-3">
          <a
            href={link}
            target="_blank"
            className="link transition shanelle-semi-bold-text"
          >
            {siteLanguage === 'en' ? 'Go to ' : 'Visita '}IMDb
            <Image fluid alt="Link Icon" src={LinkIcon} className="ms-2 mb-1" />
          </a>
        </p>
      </div>
    );
  };

  return (
    <div className="shanelle-project-container position-relative">
      <Image fluid alt={alt} src={image} className="w-100" />
      <div
        className={`shanelle-container ${
          screenWidth > 1024 ? 'shanelle-project-overlay p-4' : 'ps-0 pe-0 pt-3'
        } transition`}
      >
        {screenWidth > 1024 ? (
          <div className="shanelle-inner-container">
            <div className="shanelle-project-description-container">
              <p className="mb-3 shanelle-extra-bold-text shanelle-project-title">
                {title}
              </p>
              <p className="mb-3 shanelle-project-description">
                {description[siteLanguage as keyof typeof description]}
              </p>
              {getProjectFooter()}
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-1">
              <span className="shanelle-extra-bold-text">{title}, </span>
              <span className="shanelle-project-description">
                {!isOpen
                  ? `${description[
                      siteLanguage as keyof typeof description
                    ].substring(0, 80)}...`
                  : description[siteLanguage as keyof typeof description]}
              </span>
            </p>
            <Collapse in={isOpen}>
              <div id="collapsed-description">{getProjectFooter()}</div>
            </Collapse>
            <p
              className="link transition text-end shanelle-semi-bold-text"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen
                ? `${moreText[siteLanguage as keyof typeof moreText]}...`
                : `...${lessText[siteLanguage as keyof typeof lessText]}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
