import { AboutPerson } from '../components/about/AboutPerson';
import { AboutTitle } from '../components/about/AboutTitle';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Footer } from '../components/shared/Footer';
import { persons } from '../data/about';
import { useScreenDimensions } from '../hooks/useScreenDimensions';
import LogoColor from '../assets/images/shared/logo-color.svg';
import Shaping from '../assets/images/about/shaping-imagination-into-reality.svg';

export const About = () => {
  const { screenWidth, isPortrait } = useScreenDimensions();

  return (
    <section id="about-section">
      <Container
        className={`mt-${
          screenWidth > 767 && screenWidth < 1025 ? '3' : '5'
        } p-0`}
      >
        {screenWidth < 768 ? (
          <h1 className="shanelle-bold-text text-uppercase ps-5">About Us</h1>
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
              } shanelle-about-us-container shanelle-container position-relative shanelle-mission-vision-container ${
                screenWidth < 768 ? 'ps-0 pe-0' : ''
              }`}
            >
              <p>
                Our mission is to connect the emotions and senses of people
                through audiovisual creations.
              </p>
              <p className={screenWidth < 768 ? 'mb-0' : ''}>
                Our vision is to be a production company that helps people
                communicate through audiovisual art.
              </p>
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
              } shanelle-about-us-container shanelle-container position-relative shanelle-values-container ${
                screenWidth < 768 ? 'ps-0 pe-0' : ''
              }`}
            >
              {screenWidth > 767 ? (
                <AboutTitle
                  title="Our Values"
                  classes="position-absolute ps-3 pe-3"
                />
              ) : null}
              <p>
                At Shanelle Productions LLC we believe in quality, creativity,
                innovation, passion, love, positivity, optimism, diversity,
                honesty, loyalty, growth, respect, kindness, commitment,
                learning, determination, recognition, security, independence,
                excellence, enjoyment, gratitude, empowerment, freedom, peace,
                resilience, change and inspiration.
              </p>
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
