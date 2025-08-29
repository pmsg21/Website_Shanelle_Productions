// REACT IMPORTS
import {
  MutableRefObject,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

// HOOKS
import {
  useDetectScrollTop,
  useLanguage,
  useScreenDimensions,
  useTranslation,
} from "../hooks";

// ASSETS
import BackgroundVideo from "../assets/images/services/shanelle-productions-services-video.webm";
import BackgroundVideoTablet from "../assets/images/services/shanelle-productions-services-video-tablet.webm";
import LogoColor from "../assets/images/shared/logo-color.svg";
import LogoColorShaping from "../assets/images/services/logo-color-shaping.svg";
import ShanelleYoutubeAwardIcon from "../assets/images/film/shanelle-youtube-award-icon.svg";
import ShanelleYoutubeAwardOne from "../assets/images/film/shanelle-youtube-award-1.png";
import ShanelleYoutubeAwardThree from "../assets/images/film/shanelle-youtube-award-3.png";
import ShanelleYoutubeAwardTwo from "../assets/images/film/shanelle-youtube-award-2.png";

// COMPONENTS
import {
  Catchphrase,
  Organizations,
  ServicesList,
} from "../components/services";
import { Footer } from "../components/shared";
import { aboutAward } from "../data/about";

const ANIMATION_INTERVAL = 3000;
const ANIMATION_DURATION = 1000;

export const Services = (): ReactElement => {
  const [animate, setAnimate] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { screenWidth, isTablet, isDesktop, isPhone } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();
  const awardsContainerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const isTopOfElement = useDetectScrollTop(awardsContainerRef);

  const images = useMemo(
    () => [
      ShanelleYoutubeAwardOne,
      ShanelleYoutubeAwardTwo,
      ShanelleYoutubeAwardThree,
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 0);
    }, ANIMATION_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (!animate) return;

    const animationTimeout = setTimeout(() => {
      setAnimate(false);
    }, ANIMATION_DURATION);

    return () => clearTimeout(animationTimeout);
  }, [animate]);

  const renderAwardImage = () => (
    <Image
      fluid
      alt="Shanelle Youtube Award Icon"
      src={ShanelleYoutubeAwardIcon}
      className={`position-absolute shanelle-projects-award-icon ps-5 ${
        isPhone
          ? "opacity-1"
          : isTopOfElement
          ? "animate__animated animate__fadeInRight opacity-1 animate__delay-0-5s"
          : "opacity-0"
      }`}
    />
  );

  const getVideo = (): ReactElement => (
    <video playsInline autoPlay muted loop className="w-100 rounded-0">
      <source
        src={isTablet ? BackgroundVideoTablet : BackgroundVideo}
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  );

  const renderDesktopView = (): ReactElement => (
    <Container fluid={screenWidth < 2000}>
      <Row className="mb-4 animate__animated animate__fadeIn">
        <Col xs={12} md={6} lg={6}>
          <div
            className={`w-${
              screenWidth > 1300 ? "50" : "60"
            } d-block m-auto container`}
          >
            <Image
              className="mt-4 scale transition w-100"
              alt="Shanelle Productions Logo Color"
              src={LogoColorShaping}
            />
            <Catchphrase className="mt-6" />
          </div>
        </Col>
        <Col
          className="shanelle-background-home ps-0 pe-0"
          xs={12}
          md={6}
          lg={6}
        >
          {getVideo()}
        </Col>
      </Row>
    </Container>
  );

  const renderTabletView = (): ReactElement => (
    <div>
      {getVideo()}
      <Container className="ps-4 pe-4">
        <Catchphrase className="ps-3 pe-3 mt-0" />
      </Container>
    </div>
  );

  const renderPhoneView = (): ReactElement => (
    <div>
      {getVideo()}
      <Container className="ps-3 pe-3">
        <Image className="mt-0 w-75" alt="Logo Color" src={LogoColor} />
        <Catchphrase className="mt-3 w-100" />
      </Container>
    </div>
  );

  return (
    <main className="position-relative" id="services-section">
      {isDesktop && renderDesktopView()}
      {isTablet && renderTabletView()}
      {isPhone && renderPhoneView()}
      <Container className={`${isDesktop ? "p-0" : "ps-3 pe-3"}`}>
        <Row className="shanelle-service-container p-3 animate__animated animate__fadeIn animate__delay-0-5s">
          <h1
            className={`${
              !isPhone
                ? "shanelle-rotated-text shanelle-extra-bold-text"
                : "mb-4 shanelle-bold-text"
            } text-uppercase ${
              siteLanguage === "es" ? "shanelle-services-text-es" : ""
            }`}
          >
            {siteLanguage === "en" ? "Services" : "Servicios"}
          </h1>
          <Col xs={12} md={12} lg={6}>
            <ServicesList leftSide={true} />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <ServicesList
              leftSide={false}
              className="shanelle-second-service-container position-relative"
            />
          </Col>
        </Row>
        <div
          className={`position-relative d-flex justify-content-center ${
            isTablet ? "my-5" : isPhone ? "mt-0 mb-4" : "my-5"
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
                <div style={isPhone ? { backgroundColor: "#10060f" } : {}}>
                  <Image
                    fluid
                    alt="Shanelle Youtube Award"
                    src={images[currentImage]}
                    className={`d-block m-auto ${
                      !isPhone
                        ? "rounded-3"
                        : "position-relative rounded-3 w-100"
                    } transition scale shanelle-projects-award-image ${
                      animate ? "animate__animated animate__fadeIn" : ""
                    }`}
                  />
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
                  {translate(aboutAward)}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Organizations />
        {!isPhone && (
          <Footer
            className={
              "mt-5 mb-5 animate__animated animate__fadeIn animate__delay-1s"
            }
          />
        )}
      </Container>
    </main>
  );
};

export default Services;
