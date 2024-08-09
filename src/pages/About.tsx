// REACT IMPORTS
import { ReactElement } from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

// DATA
import { missionVisionValues, aboutTeamMembers } from '../data/about';

// HOOKS
import { useLanguage, useScreenDimensions, useTranslation } from '../hooks';

// ASSETS
import AboutUsVideo from '../assets/images/about/about-us.mp4';
import DreamTeamSeparator from '../assets/images/about/dream-team-separator.svg';
import LogoColor from '../assets/images/shared/logo-color.svg';
import Shaping from '../assets/images/about/shaping-imagination-into-reality.svg';

// COMPONENTS
import { AboutCreators, AboutTeamMember } from '../components/about';
import { AnimatedHeading, Footer } from '../components/shared';

export const About = (): ReactElement => {
  const { isPortrait, isTablet, isPhone, isDesktop, screenWidth } =
    useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();
  const { mission, vision, values } = missionVisionValues;
  const { michelleShana, teamMembers } = aboutTeamMembers;

  return (
    <section id="about-section">
      <Container className={`mt-${isTablet ? '3' : isPhone ? '4' : '5'} p-0`}>
        {isPhone ? (
          <h1 className="shanelle-bold-text text-uppercase ps-3">
            {siteLanguage === 'en' ? 'About Us' : 'Conócenos'}
          </h1>
        ) : null}
        <Row
          className={`mb-${
            !isPhone ? '5' : '0'
          } animate__animated animate__fadeIn ${
            isPhone ? 'w-100 ms-0 me-0' : ''
          }`}
        >
          <Col md={6} xs={12} lg={5} className={isPhone ? 'ps-0 pe-0' : ''}>
            <Image
              fluid
              alt="Shanelle Productions Logo Color"
              src={LogoColor}
              className={`${
                isPhone ? 'd-block m-auto w-75' : ''
              } transition scale`}
            />
          </Col>
          {isTablet && !isPortrait ? (
            <Col md={6} xs={12} lg={5}>
              <Image
                fluid
                alt="Shaping Imagination Into Reality"
                src={Shaping}
                className="scale transition mt-5"
              />
            </Col>
          ) : null}
          <Col md={12} xs={12} lg={7} className={isPhone ? 'ps-0 pe-0' : ''}>
            <div
              className={`${
                !isDesktop ? 'd-block m-auto mt-4' : 'mt-6'
              } shanelle-container shanelle-about-us-container position-relative shanelle-mission-vision-container ${
                isPhone ? 'ps-0 pe-0' : ''
              }`}
            >
              <div className="shanelle-inner-container">
                <p>{translate(mission)}</p>
                <p className={isPhone ? 'mb-0' : ''}>{translate(vision)}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          className={`mb-${
            !isPhone ? '5' : '0'
          } animate__animated animate__fadeIn animate__delay-0-5s ${
            isPhone ? 'w-100 ms-0 me-0' : ''
          }`}
        >
          <Col md={12} xs={12} lg={7} className={isPhone ? 'ps-0 pe-0' : ''}>
            <div
              className={`${
                !isDesktop ? 'd-block m-auto' : ''
              } shanelle-container shanelle-about-us-container position-relative shanelle-values-container ${
                isPhone ? 'ps-0 pe-0' : ''
              }`}
            >
              {!isPhone && (
                <AnimatedHeading
                  className="position-absolute ps-3 pe-3"
                  Heading="h1"
                  text={
                    siteLanguage === 'en' ? 'Our Values' : 'Nuestros Valores'
                  }
                />
              )}
              <div className="shanelle-inner-container">
                <p>{translate(values)}</p>
              </div>
            </div>
          </Col>
          {isDesktop || (isTablet && isPortrait) ? (
            <Col md={12} xs={12} lg={5}>
              <Image
                fluid
                alt="Shaping Imagination Into Reality"
                src={Shaping}
                className="scale transition"
              />
            </Col>
          ) : null}
        </Row>
        <Container className={`${isDesktop ? 'w-80' : ''}`}>
          <AboutCreators />
          <video
            autoPlay
            className={`w-100 ${
              isPhone || isTablet ? 'mt-3 mb-4 rounded-0 px-0' : 'mt-16 mb-5'
            } d-block m-auto animate__animated animate__fadeIn animate__delay-1-5s`}
            loop
            muted
            playsInline
          >
            <source src={AboutUsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-5 mb-5 text-justify animate__animated animate__fadeIn animate__delay-2s">
            {translate(michelleShana)}
          </p>
          <div className="d-block m-auto position-relative">
            <div className="d-flex align-items-center">
              <AnimatedHeading
                className="mb-0 me-4"
                Heading="h1"
                text={
                  siteLanguage === 'en'
                    ? 'Our Dream Team'
                    : 'Nuestro Increíble Equipo'
                }
              />
              {!isPhone && (
                <Image
                  alt="Dream team separator"
                  className={`w-${
                    isDesktop ? '60 d-block m-auto' : '50 flex-grow-1'
                  }`}
                  fluid
                  src={DreamTeamSeparator}
                />
              )}
            </div>
            <Row className="mt-3 animate__animated animate__fadeIn animate__delay-2-5s">
              {teamMembers.map((member, index) => (
                <Col
                  key={`team-member-${index}`}
                  lg={{ span: 4, offset: index === 3 || index === 5 ? 2 : 0 }}
                  md={{ span: 6, offset: index === 4 ? 3 : 0 }}
                  xs={12}
                >
                  <AboutTeamMember {...member} role={translate(member.role)} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        {!isPhone ? (
          <Footer
            className={`mt-${isDesktop ? '6' : '5'} mb-${
              !isDesktop ? '5' : '4'
            } animate__animated animate__fadeIn animate__delay-2s`}
          />
        ) : null}
      </Container>
    </section>
  );
};

export default About;
