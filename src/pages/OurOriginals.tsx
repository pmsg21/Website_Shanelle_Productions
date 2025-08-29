// REACT IMPORTS
import { MutableRefObject, ReactElement, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// DATA
import {
  ourOriginals,
  ourOriginalSeries,
  ourOriginalsParagraphs,
  ourOriginalsSocialMediaParagraphs,
} from "../data/our-originals";

// HOOKS
import {
  useDetectScrollTop,
  useLanguage,
  useScreenDimensions,
  useTranslation,
} from "../hooks";

// ASSETS
import Separator from "../assets/images/shared/separator.svg";
import Shanelle from "../assets/images/our-originals/shanelle.png";
import Spotify from "../assets/images/our-originals/spotify.svg";
import ShanelleYoutubeAwardIcon from "../assets/images/film/shanelle-youtube-award-icon.svg";
import YoutubePlaque from "../assets/images/our-originals/youtube-plaque.webm";

// COMPONENTS
import {
  OurOriginalsSeriesSection,
  OurOriginalsSocialCard,
  OurOriginalsSocialMediaCard,
} from "../components/our-originals";
import { AnimatedHeading, Footer } from "../components/shared";

export const OurOriginals = (): ReactElement => {
  const { screenWidth, isPortrait, isPhone, isTablet, isDesktop } =
    useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();
  const sectionTitle = siteLanguage === "en" ? "Our Originals" : "Lo Nuestro";
  const ourOriginalSeriesText =
    siteLanguage === "en"
      ? "Stream now our original series:"
      : "Ve ahora nuestras series:";
  const { firstParagraph, secondParagraph, thirdParagraph } =
    ourOriginalsParagraphs;
  const {
    socialMediaHeader,
    socialMediaDescription,
    socialMediaFooter,
    socialMedia,
    socialMediaYoutubePlaque,
  } = ourOriginalsSocialMediaParagraphs;
  const isTabletPortrait = isTablet && isPortrait;
  const awardsContainerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const isTopOfElement = useDetectScrollTop(awardsContainerRef);

  const getYoutubeVideoDimensions = (): { height: string; width: string } => {
    let videoDimensions = {
      height: "479",
      width: "852",
    };
    if (isTablet && !isTabletPortrait) {
      videoDimensions = {
        height: "382",
        width: "676",
      };
    } else if (isPhone) {
      videoDimensions = {
        height: "180",
        width: "322",
      };
    }

    return videoDimensions;
  };

  const renderAwardImage = () => (
    <Image
      fluid
      alt="Shanelle Youtube Award Icon"
      src={ShanelleYoutubeAwardIcon}
      className={`position-absolute shanelle-projects-award-icon ${
        isPhone
          ? "opacity-1"
          : isTopOfElement
          ? "animate__animated animate__fadeInRight opacity-1 animate__delay-0-5s"
          : "opacity-0"
      }`}
    />
  );

  return (
    <section id="our-originals-section">
      <Container
        className={`mt-${
          isPhone ? "0" : "6"
        } p-0 animate__animated animate__fadeIn`}
      >
        {!isPhone ? (
          <h1
            className={`${
              isDesktop ? "shanelle-rotated-text" : "position-absolute"
            } shanelle-extra-bold-text shanelle-entertainment-title ${
              siteLanguage === "es" ? "shanelle-entertainment-title-es" : ""
            } text-uppercase`}
          >
            {sectionTitle}
          </h1>
        ) : (
          <h1 className="shanelle-bold-text text-uppercase ps-3 mb-4 mt-4">
            {sectionTitle}
          </h1>
        )}
        <div className="shanelle-entertainment-main-container m-auto">
          <p>{ourOriginalSeriesText}</p>
          {ourOriginalSeries.map((item) => (
            <OurOriginalsSeriesSection
              key={item.id}
              {...item}
              youtubeVideoDimensions={getYoutubeVideoDimensions()}
            />
          ))}
          <div
            className={`position-relative d-flex justify-content-center ${
              isTablet ? "mt-2 mb-5" : isPhone ? "mt-0 mb-4" : "my-5"
            }`}
            ref={awardsContainerRef}
          >
            <div
              className={`w-100dvw shanelle-award-background ${
                isPhone
                  ? "opacity-1"
                  : isTopOfElement
                  ? "animate__animated animate__fadeIn opacity-1 animate__delay-0-5s"
                  : "opacity-0"
              }`}
            />

            <Container className={`${isPhone ? "p-0" : ""}`}>
              <Row
                md={2}
                xs={1}
                lg={2}
                className={`${isPhone ? "w-100 ms-0 me-0" : ""} g-3`}
              >
                <Col
                  className={`${
                    isPhone
                      ? "opacity-1 ps-0 pe-0"
                      : isTopOfElement
                      ? "animate__animated animate__fadeInLeft opacity-1 animate__delay-0-5s"
                      : "opacity-0"
                  }`}
                >
                  <div
                    className="d-flex justify-content-center"
                    style={isPhone ? { backgroundColor: "#10060f" } : {}}
                  >
                    <video
                      playsInline
                      autoPlay
                      muted
                      loop
                      style={{ width: isPhone ? "100%" : "280px" }}
                      className="scale transition"
                    >
                      <source src={YoutubePlaque} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
                <Col className="shanelle-projects-award-text-container d-flex position-relative">
                  {!isPhone && renderAwardImage()}
                  <p
                    className={`${!isPhone ? "p-5 ps-0" : "p-4 mb-0"} ${
                      isPhone
                        ? "opacity-1"
                        : isTopOfElement
                        ? "animate__animated animate__fadeInRight opacity-1 animate__delay-0-5s"
                        : "opacity-0"
                    } shanelle-projects-award ${
                      isTablet ? "align-self-end py-0 px-2" : ""
                    }`}
                  >
                    {translate(socialMediaYoutubePlaque)}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <p
            className={`animate__animated animate__fadeIn animate__delay-1s ${
              isPhone ? "text-center" : `ps-${isTablet ? "0" : "5"}`
            }`}
          >
            {translate(socialMediaHeader)}
          </p>
          {isTablet ? (
            <div className="d-flex flex-column gap-3 px-5">
              <div className="d-flex flex-row gap-5">
                {[socialMedia[0], socialMedia[1]].map((item) => (
                  <OurOriginalsSocialMediaCard key={item.id} {...item} />
                ))}
              </div>
              <div className="d-flex flex-row gap-5">
                {[socialMedia[2], socialMedia[3]].map((item) => (
                  <OurOriginalsSocialMediaCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          ) : (
            <div
              className={`d-flex flex-${
                isPhone ? "column" : "row"
              } justify-content-center gap-3`}
            >
              {socialMedia.map((item) => (
                <OurOriginalsSocialMediaCard key={item.id} {...item} />
              ))}
            </div>
          )}

          <p
            className={`w-${
              isDesktop ? "90 ps-5" : "100"
            } animate__animated animate__fadeIn animate__delay-3-5s text-justify p-0 mb-3 fs-6`}
          >
            {translate(socialMediaDescription)}
          </p>
          <p
            className={`w-${
              isDesktop ? "90 ps-5" : "100"
            } animate__animated animate__fadeIn animate__delay-3-5s text-justify p-0 mb-${
              isPhone ? "3" : "6"
            } fs-6`}
          >
            {translate(socialMediaFooter)}
          </p>
          <div className="d-flex align-items-center">
            <AnimatedHeading
              className={`mb-0 ${isPhone ? "mt-4" : ""}`}
              Heading="h1"
              text={
                siteLanguage === "en"
                  ? "Our Original Songs"
                  : "Canciones Originales"
              }
            />
            {!isPhone && !isTablet && (
              <Image
                alt="Separator"
                className={`${
                  isDesktop
                    ? `d-block m-auto ${
                        siteLanguage === "es" ||
                        (isDesktop && screenWidth < 1281)
                          ? "w-50"
                          : "w-60"
                      }`
                    : "w-50 flex-grow-1"
                }`}
                fluid
                src={Separator}
              />
            )}
          </div>
          <p className="my-3">{translate(firstParagraph)}</p>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-5 mb-5 d-block m-auto transition scale"
            frameBorder="0"
            src="https://www.youtube.com/embed/4BzcrUezTLI?si=bt_wLFuunBvkwW1z"
            style={{ borderRadius: "20px" }}
            title="YouTube video player"
            {...getYoutubeVideoDimensions()}
          ></iframe>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-5 mb-5 d-block m-auto transition scale"
            frameBorder="0"
            src="https://www.youtube.com/embed/FpMPikyzNP8?si=jHbAeb1uIvJKOFqw"
            style={{ borderRadius: "20px" }}
            title="YouTube video player"
            {...getYoutubeVideoDimensions()}
          ></iframe>
          <p className="my-3">{translate(secondParagraph)}</p>
          <Row>
            <Col
              className="mb-4"
              xs={12}
              md={{
                span: isTabletPortrait ? 6 : 12,
                offset: isTabletPortrait ? 3 : undefined,
              }}
              lg={{
                span: 6,
                offset: 3,
              }}
            >
              <div
                className={`${
                  isTablet && !isTabletPortrait ? "w-75 m-auto" : ""
                } shanelle-container shanelle-entertainment-container`}
              >
                <div className="shanelle-inner-container">
                  <Row>
                    <Col>
                      <Image
                        alt="Shanelle"
                        className="d-block m-auto transition scale"
                        fluid
                        src={Shanelle}
                      />
                    </Col>
                    <Col className="shanelle-entertainment-card-description-container">
                      <h3>Shanelle</h3>
                      <a
                        href="https://open.spotify.com/artist/6lEBoYxyvA8S64R5PBJW69?si=73Vqn_TYTsu5w6Q_O2lP5g"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          alt="Spotify"
                          className="transition scale-1-2"
                          fluid
                          src={Spotify}
                        />
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <p>{translate(thirdParagraph)}</p>
          <Row
            md={2}
            xs={1}
            lg={3}
            className={`${
              isPhone ? "w-100 ms-0 me-0" : ""
            } g-3 position-relative ${isDesktop && "justify-content-center"}`}
          >
            {ourOriginals.map((item) => (
              <Col
                {...(isDesktop && { style: { width: "30%" } })}
                className={!isPhone ? "p-3" : "ps-0 pe-0 mb-4"}
                key={item.id}
              >
                <OurOriginalsSocialCard {...item} />
              </Col>
            ))}
          </Row>
        </div>
        {!isPhone ? (
          <Footer
            className={`mt-5 mb-${
              screenWidth < 1025 ? "5" : "4"
            } animate__animated animate__fadeIn animate__delay-0-5s`}
          />
        ) : null}
      </Container>
    </section>
  );
};

export default OurOriginals;
