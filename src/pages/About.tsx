import { AboutPerson } from '../components/about/AboutPerson';
import { AboutTitle } from '../components/about/AboutTitle';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Footer } from '../components/shared/Footer';
import { missionVisionValues, persons } from '../data/about';
import { useLanguage } from '../hooks/useLanguage';
import { useScreenDimensions } from '../hooks/useScreenDimensions';
import LogoColor from '../assets/images/shared/logo-color.svg';
import Shaping from '../assets/images/about/shaping-imagination-into-reality.svg';

export const About = () => {
  const { screenWidth, isPortrait } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const { mission, vision, values } = missionVisionValues;

  return (
    <section id="about-section">
      <Container
        className={`mt-${
          screenWidth > 767 && screenWidth < 1025 ? '3' : '5'
        } p-0`}
      >
        {screenWidth < 768 ? (
          <h1 className="shanelle-bold-text text-uppercase ps-3">
            {siteLanguage === 'en' ? 'About Us' : 'Conócenos'}
          </h1>
        ) : null}
        <Row
          className={`mb-${
            screenWidth > 767 ? '5' : '0'
          } animate__animated animate__fadeIn ${
            screenWidth < 768 ? 'w-100 ms-0 me-0' : ''
          }`}
        >
          <Col
            md={6}
            xs={12}
            lg={5}
            className={screenWidth < 768 ? 'ps-0 pe-0' : ''}
          >
            <Image
              fluid
              alt="Shanelle Productions Logo Color"
              src={LogoColor}
              className={`${
                screenWidth < 768 ? 'd-block m-auto w-75' : ''
              } transition scale`}
            />
          </Col>
          {screenWidth > 767 && screenWidth < 1025 && !isPortrait ? (
            <Col md={6} xs={12} lg={5}>
              <Image
                fluid
                alt="Shaping Imagination Into Reality"
                src={Shaping}
                className="scale transition mt-5"
              />
            </Col>
          ) : null}
          <Col
            md={12}
            xs={12}
            lg={7}
            className={screenWidth < 768 ? 'ps-0 pe-0' : ''}
          >
            <div
              className={`${
                screenWidth < 1025 ? 'd-block m-auto mt-4' : 'mt-6'
              } shanelle-container shanelle-about-us-container position-relative shanelle-mission-vision-container ${
                screenWidth < 768 ? 'ps-0 pe-0' : ''
              }`}
            >
              <div className="shanelle-inner-container">
                <p>{mission[siteLanguage as keyof typeof mission]}</p>
                <p className={screenWidth < 768 ? 'mb-0' : ''}>
                  {vision[siteLanguage as keyof typeof vision]}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          className={`mb-${
            screenWidth > 767 ? '5' : '0'
          } animate__animated animate__fadeIn animate__delay-0-5s ${
            screenWidth < 768 ? 'w-100 ms-0 me-0' : ''
          }`}
        >
          <Col
            md={12}
            xs={12}
            lg={7}
            className={screenWidth < 768 ? 'ps-0 pe-0' : ''}
          >
            <div
              className={`${
                screenWidth < 1025 ? 'd-block m-auto' : ''
              } shanelle-container shanelle-about-us-container position-relative shanelle-values-container ${
                screenWidth < 768 ? 'ps-0 pe-0' : ''
              }`}
            >
              {screenWidth > 767 ? (
                <AboutTitle
                  title={
                    siteLanguage === 'en' ? 'Our Values' : 'Nuestros Valores'
                  }
                  classes="position-absolute ps-3 pe-3"
                />
              ) : null}
              <div className="shanelle-inner-container">
                <p>{values[siteLanguage as keyof typeof values]}</p>
              </div>
            </div>
          </Col>
          {screenWidth > 1024 ||
          (screenWidth > 767 && screenWidth < 1025 && isPortrait) ? (
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
        {persons.map((person) => (
          <AboutPerson
            isPortrait={isPortrait}
            key={person.id}
            person={person}
            screenWidth={screenWidth}
          />
        ))}
        {screenWidth > 767 ? (
          <Footer
            className={`mt-6 mb-${
              screenWidth < 1025 ? '5' : '4'
            } animate__animated animate__fadeIn animate__delay-2s`}
          />
        ) : null}
      </Container>
    </section>
  );
};

export default About;
