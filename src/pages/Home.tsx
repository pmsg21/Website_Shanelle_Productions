import { Catchphrase } from '../components/home/Catchphrase';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Footer } from '../components/shared/Footer';
import { ServicesList } from '../components/home/ServicesList';
import { useScreenDimensions } from '../hooks/useScreenDimensions';
import BackgroundHome from '../assets/images/home/background-home.png';
import BackgroundHomeTablet from '../assets/images/home/background-home-tablet.png';
import LogoColor from '../assets/images/shared/logo-color.svg';
import LogoColorShaping from '../assets/images/home/logo-color-shaping.svg';

export const Home = () => {
  const { screenWidth } = useScreenDimensions();

  return (
    <main id="home-section">
      {screenWidth > 1024 ? (
        <Container fluid={screenWidth < 2000}>
          <Row className="mb-5 animate__animated animate__fadeIn">
            <Col xs={12} md={6} lg={6}>
              <div
                className={`w-${
                  screenWidth > 1300 ? '50' : '60'
                } d-block m-auto container`}
              >
                <Image
                  className={`mt-${
                    screenWidth > 1024 && screenWidth < 1301 ? '4' : '6'
                  } scale transition w-100`}
                  alt="Shanelle Productions Logo Color"
                  src={LogoColorShaping}
                />
                <Catchphrase classes="mt-6" />
              </div>
            </Col>
            <Col
              className="shanelle-background-home"
              xs={12}
              md={6}
              lg={6}
            ></Col>
          </Row>
        </Container>
      ) : null}
      {screenWidth > 767 && screenWidth < 1025 ? (
        <div>
          <Image
            className="mt-0 w-100 ps-5"
            alt="Background Home Tablet"
            src={BackgroundHomeTablet}
          />
          <Container className="ps-4 pe-4">
            <Catchphrase classes="ps-3 pe-3 mt-5" />
          </Container>
        </div>
      ) : null}
      {screenWidth < 768 ? (
        <div>
          <Image
            className="mt-0 w-100"
            alt="Background Home"
            src={BackgroundHome}
          />
          <Container className="ps-4 pe-4">
            <Image className="mt-0 w-75" alt="Logo Color" src={LogoColor} />
            <Catchphrase classes="mt-3 w-100" />
          </Container>
        </div>
      ) : null}
      <Container className={`${screenWidth > 1024 ? 'p-0' : 'ps-4 pe-4'}`}>
        <Row className="shanelle-service-container p-3 animate__animated animate__fadeIn animate__delay-0-5s">
          <h1
            className={`${
              screenWidth > 767
                ? 'shanelle-rotated-text shanelle-extra-bold-text'
                : 'mb-4 shanelle-bold-text'
            } text-uppercase`}
          >
            Services
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
        {screenWidth > 767 ? (
          <Footer
            className={
              'mt-5 mb-5 animate__animated animate__fadeIn animate__delay-1s'
            }
          />
        ) : null}
      </Container>
    </main>
  );
};

export default Home;
