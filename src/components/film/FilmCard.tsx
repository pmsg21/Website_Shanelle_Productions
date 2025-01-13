// REACT IMPORTS
import { ReactElement, useState } from "react";
import { Collapse, Image } from "react-bootstrap";

// INTERFACES
import { LanguageOptions } from "../../interfaces/language";
import { Film } from "../../interfaces/film";

// HOOKS
import { useLanguage, useScreenDimensions, useTranslation } from "../../hooks";

// ASSETS
import LinkIcon from "../../assets/images/about/link.svg";

export const FilmCard = ({
  alt,
  description,
  emphasisText,
  image,
  link,
  title,
}: Film): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const { screenWidth, isDesktop } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();

  const translatedDescription = translate(description);
  const formattedDescription =
    screenWidth < 1025
      ? translatedDescription.charAt(0).toLowerCase() +
        translatedDescription.slice(1)
      : translatedDescription;

  const moreText: LanguageOptions = {
    en: "More",
    es: "Más",
  };
  const lessText: LanguageOptions = {
    en: "Less",
    es: "Menos",
  };

  const getProjectFooter = (): ReactElement => (
    <div className={screenWidth < 1025 ? "mt-4" : ""}>
      <p className="mb-0 shanelle-extra-bold-text">{translate(emphasisText)}</p>
      <p className="text-end mt-3">
        <a
          href={link}
          target="_blank"
          className="link transition shanelle-semi-bold-text"
          rel="noopener noreferrer"
        >
          {siteLanguage === "en" ? "Go to " : "Visita "}IMDb
          <Image fluid alt="Link Icon" src={LinkIcon} className="ms-2 mb-1" />
        </a>
      </p>
    </div>
  );

  const renderDesktopView = (): ReactElement => (
    <div className="shanelle-inner-container">
      <div className="shanelle-project-description-container">
        <p className="mb-3 shanelle-extra-bold-text shanelle-project-title">
          {title}
        </p>
        <p className="mb-3 shanelle-project-description">
          {formattedDescription}
        </p>
        {getProjectFooter()}
      </div>
    </div>
  );

  const renderMobileView = (): ReactElement => (
    <div>
      <p className="mb-1">
        <span className="shanelle-extra-bold-text">{title}, </span>
        <span className="shanelle-project-description">
          {!isOpen
            ? `${formattedDescription.substring(0, 80)}...`
            : formattedDescription}
        </span>
      </p>
      <Collapse in={isOpen}>
        <div id="collapsed-description">{getProjectFooter()}</div>
      </Collapse>
      <p
        className="link transition text-end shanelle-semi-bold-text"
        onClick={(): void => setIsOpen(!isOpen)}
      >
        {!isOpen ? `${translate(moreText)}...` : `...${translate(lessText)}`}
      </p>
    </div>
  );

  return (
    <div className="shanelle-project-container position-relative">
      <Image fluid alt={alt} src={image} className="w-100" />
      <div
        className={`shanelle-container ${
          isDesktop ? "shanelle-project-overlay p-4" : "ps-0 pe-0 pt-3"
        } transition`}
      >
        {isDesktop ? renderDesktopView() : renderMobileView()}
      </div>
    </div>
  );
};
