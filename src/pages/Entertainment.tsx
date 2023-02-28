import { Container, Row, Col, Image } from 'react-bootstrap';
import { entertainment, entertainmentParagraphs } from '../data/entertainment';
import { EntertainmentSocialCard } from '../components/entertainment/EntertainmentSocialCard';
import { Footer } from '../components/shared/Footer';
import { useLanguage } from '../hooks/useLanguage';
import { useScreenDimensions } from '../hooks/useScreenDimensions';
import Shanelle from '../assets/images/entertainment/shanelle.png';
import Spotify from '../assets/images/entertainment/spotify.svg';

export const Entertainment = () => {
  const { screenWidth, isPortrait } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const sectionTitle =
    siteLanguage === 'en' ? 'Entertainment' : 'Entretenimiento';
  const { firstParagraph, secondParagraph } = entertainmentParagraphs;
  const isTabletPortrait =
    screenWidth > 767 && screenWidth < 1025 && isPortrait;

  return (
    <section id="entertainment-section">
      <Container
        className={`mt-${
          screenWidth < 768 ? '0' : '6'
        } p-0 animate__animated animate__fadeIn`}
      >
        {screenWidth > 767 ? (
          <h1
            className={`${
              screenWidth > 1024 ? 'shanelle-rotated-text' : 'position-absolute'
            } shanelle-extra-bold-text shanelle-entertainment-title ${
              siteLanguage === 'es' ? 'shanelle-entertainment-title-es' : ''
            } text-uppercase`}
          >
            {sectionTitle}
          </h1>
        ) : (
          <h1 className="shanelle-bold-text text-uppercase ps-3 mb-4">
            {sectionTitle}
          </h1>
        )}
        <div className="shanelle-entertainment-main-container m-auto">
          <p>{firstParagraph[siteLanguage as keyof typeof firstParagraph]}</p>
          <Row
            md={1}
            xs={1}
            lg={2}
            className={`${
              screenWidth < 768 ? 'w-100 ms-0 me-0' : ''
            } g-3 position-relative`}
          >
            {entertainment.map((item) => (
              <Col
                className={screenWidth > 767 ? 'p-3' : 'ps-0 pe-0 mb-4'}
                key={item.id}
              >
                <EntertainmentSocialCard
                  {...item}
                  className="transition scale"
                />
              </Col>
            ))}
          </Row>
          <p className="mt-3 mb-3">
            {secondParagraph[siteLanguage as keyof typeof secondParagraph]}
          </p>
          <Row>
            <Col
              xs={12}
              md={{
                span: isTabletPortrait ? 6 : 12,
                offset: isTabletPortrait ? 3 : undefined,
              }}
              lg={6}
            >
              <div
                className={`${
                  screenWidth > 767 && screenWidth < 1025 && !isTabletPortrait
                    ? 'w-75 m-auto'
                    : ''
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
                    <Col>
                      <h4>Shanelle</h4>
                      <p>Female Sound Producers & Filmmakers.</p>
                      <a
                        href="https://open.spotify.com/artist/6lEBoYxyvA8S64R5PBJW69?si=73Vqn_TYTsu5w6Q_O2lP5g"
                        target="_blank"
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
        </div>
        {screenWidth > 767 ? (
          <Footer
            className={`mt-5 mb-${
              screenWidth < 1025 ? '5' : '4'
            } animate__animated animate__fadeIn animate__delay-0-5s`}
          />
        ) : null}
      </Container>
    </section>
  );
};

export default Entertainment;
