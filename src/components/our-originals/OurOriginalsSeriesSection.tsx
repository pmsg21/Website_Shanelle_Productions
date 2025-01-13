// TYPES
import type { ReactElement } from "react";

// REACT IMPORTS
import { Button, Image } from "react-bootstrap";

// INTERFACES
import { OurOriginalSeries } from "../../interfaces/our-originals";
import { LanguageOptions } from "../../interfaces/language";

// HOOKS
import { useLanguage, useScreenDimensions, useTranslation } from "../../hooks";

// ASSETS
import LinkIcon from "../../assets/images/about/link.svg";

type OurOriginalsSeriesSectionProps = OurOriginalSeries & {
  youtubeVideoDimensions: { height: string; width: string };
};

export const OurOriginalsSeriesSection = ({
  awardImage,
  awardText,
  banner,
  bannerAlt,
  credits,
  description,
  hasAward,
  imdbLink,
  logo,
  logoAlt,
  trailerLink,
  views,
  watchLink,
  youtubeVideoDimensions,
}: OurOriginalsSeriesSectionProps): ReactElement => {
  const { isPhone, isTablet, isDesktop } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();
  const viewsText =
    siteLanguage === "en"
      ? `More than ${views} views`
      : `Más de ${views} de vistas`;

  const renderImage = (src: string, alt: string, additionalClasses = "") => (
    <Image
      fluid
      alt={alt}
      src={src}
      className={`transition scale ${additionalClasses}`}
    />
  );

  const renderText = (text: LanguageOptions) => (
    <p className="mb-0">{translate(text)}</p>
  );

  const renderButton = (link: string, text: string) => (
    <Button
      onClick={() => window.open(link, "_blank", "noopener, noreferrer")}
      className="home-buttons shanelle-bold-text"
      type="button"
    >
      <h5 className="mb-0">{text}</h5>
    </Button>
  );

  const renderLink = (link: string, text: string) => (
    <p className="text-center m-0">
      <a
        href={link}
        target="_blank"
        className="link transition"
        rel="noopener noreferrer"
      >
        {text} IMDb
        <Image fluid alt="Link Icon" src={LinkIcon} className="ms-2 mb-1" />
      </a>
    </p>
  );

  return (
    <div className={`d-flex flex-column gap-3 ${isDesktop ? "mb-4" : ""}`}>
      <div
        className={`d-flex flex-${
          isPhone
            ? "column"
            : `row align-items-${isTablet ? "center" : "start"}`
        } gap-5`}
      >
        {renderImage(banner, bannerAlt, `w-${isTablet ? "50" : "100"}`)}
        <div className="d-flex flex-column gap-3">
          <div
            className={`d-flex flex-${
              isPhone || isTablet
                ? "column"
                : "row align-items-center justify-content-around"
            } gap-3`}
          >
            {renderImage(logo, logoAlt)}
            <div
              className={`shanelle-container ${
                !isPhone && !isTablet ? "w-35" : ""
              }`}
            >
              <div className="shanelle-inner-container p-4">
                <h4 className="text-uppercase shanelle-extra-bold-text text-center">
                  {viewsText}
                </h4>
              </div>
            </div>
          </div>
          {!isTablet && (
            <>
              {renderText(description)}
              {renderText(credits)}
            </>
          )}
          <div
            className={`d-flex flex-${
              isPhone || isTablet ? "column" : "row"
            } gap-3 align-items-center`}
          >
            {!isTablet && hasAward && renderImage(awardImage, "Award image")}
            <div className="d-flex flex-column gap-3">
              {!isTablet && hasAward && awardText && renderText(awardText)}
              <div
                className={`d-flex flex-${
                  isPhone || isTablet ? "column" : "row"
                } gap-3 align-items-center ${isPhone ? "my-3" : ""}`}
              >
                {renderButton(
                  watchLink,
                  siteLanguage === "en" ? "Watch Series" : "Ver serie"
                )}
                {renderLink(
                  imdbLink,
                  siteLanguage === "en" ? "Go to " : "Visita "
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTablet && (
        <>
          {renderText(description)}
          {renderText(credits)}
        </>
      )}
      {isTablet && hasAward && (
        <div className="d-flex flex-row gap-3">
          {renderImage(awardImage, "Award image")}
          {awardText && renderText(awardText)}
        </div>
      )}
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={`${
          isDesktop ? "my-5" : "mb-6"
        } d-block m-auto transition scale`}
        frameBorder="0"
        src={trailerLink}
        style={{ borderRadius: "20px" }}
        title="YouTube video player"
        {...youtubeVideoDimensions}
      ></iframe>
    </div>
  );
};
