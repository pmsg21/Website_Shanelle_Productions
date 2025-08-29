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
  awards,
  banner,
  bannerAlt,
  credits,
  description,
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
    <p className="mb-0 w-100">{translate(text)}</p>
  );

  const renderButtonAndLink = () => (
    <div className="d-flex flex-column gap-3">
      <Button
        onClick={() => window.open(watchLink, "_blank", "noopener, noreferrer")}
        className="home-buttons shanelle-bold-text"
        type="button"
      >
        <h5 className="mb-0">
          {siteLanguage === "en" ? "Watch Series" : "Ver serie"}
        </h5>
      </Button>
      <p className="text-center m-0">
        <a
          href={imdbLink}
          target="_blank"
          className="link transition"
          rel="noopener noreferrer"
        >
          {siteLanguage === "en" ? "Go to " : "Visita "} IMDb
          <Image fluid alt="Link Icon" src={LinkIcon} className="ms-2 mb-1" />
        </a>
      </p>
    </div>
  );

  const renderAwards = () => (
    <div className="d-flex flex-column gap-2 align-items-start w-100">
      {awards.map(({ image, imageAlt, text }, index) => (
        <div
          className={`d-flex flex-row gap-2 align-items-${
            isPhone ? "start" : "center"
          }`}
          key={`${imageAlt}-${index}`}
        >
          {renderImage(image, imageAlt)}
          {renderText(text)}
        </div>
      ))}
    </div>
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
        <div
          className={`d-flex flex-column gap-3 ${isTablet ? "w-100" : ""} ${
            isDesktop ? "w-40" : ""
          }`}
        >
          {renderImage(banner, bannerAlt, "w-100")}
          {isDesktop && renderButtonAndLink()}
        </div>
        <div className="d-flex flex-column gap-3 w-100">
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
            {isTablet && renderButtonAndLink()}
          </div>
          {!isTablet && (
            <>
              {renderText(description)}
              {renderText(credits)}
              {renderAwards()}
            </>
          )}
        </div>
      </div>
      {isTablet && (
        <>
          {renderText(description)}
          {renderText(credits)}
          {renderAwards()}
        </>
      )}
      {isPhone && renderButtonAndLink()}
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={`${
          isDesktop ? "my-5" : "mb-5"
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
