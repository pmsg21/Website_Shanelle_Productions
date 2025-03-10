// REACT IMPORTS
import { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

// HOOKS
import { useLanguage, useScreenDimensions } from "../hooks";

// ASSETS
import BackgroundVideo from "../assets/images/services/shanelle-productions-services-video.mp4";
import BackgroundVideoTablet from "../assets/images/services/shanelle-productions-services-video-tablet.mp4";
import LogoColor from "../assets/images/shared/logo-color.svg";
import LogoColorShaping from "../assets/images/services/logo-color-shaping.svg";

// COMPONENTS
import {
  Catchphrase,
  Organizations,
  ServicesList,
} from "../components/services";
import { Footer } from "../components/shared";

export const Services = (): ReactElement => {
  const { screenWidth, isTablet, isDesktop, isPhone } = useScreenDimensions();
  const { siteLanguage } = useLanguage();

  const getVideo = (): ReactElement => (
    <video playsInline autoPlay muted loop className="w-100 rounded-0">
      <source
        src={isTablet ? BackgroundVideoTablet : BackgroundVideo}
        type="video/mp4"
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
