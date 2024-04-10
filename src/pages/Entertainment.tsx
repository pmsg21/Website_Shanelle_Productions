// REACT IMPORTS
import { ReactElement } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// DATA
import {
  entertainment,
  entertainmentParagraphs,
  entertainmentSocialMediaParagraphs,
} from '../data/entertainment';

// HOOKS
import { useLanguage, useScreenDimensions, useTranslation } from '../hooks';

// ASSETS
import Shanelle from '../assets/images/entertainment/shanelle.png';
import Spotify from '../assets/images/entertainment/spotify.svg';
import TikTokGif from '../assets/images/entertainment/tiktok_shanelle_productions.gif';

// COMPONENTS
import {
  EntertainmentSocialCard,
  EntertainmentSocialMediaCard,
} from '../components/entertainment';
import { Footer } from '../components/shared';

export const Entertainment = (): ReactElement => {
  const { screenWidth, isPortrait } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();
  const sectionTitle =
    siteLanguage === 'en' ? 'Entertainment' : 'Entretenimiento';
  const { firstParagraph, secondParagraph, thirdParagraph, fourthParagraph } =
    entertainmentParagraphs;
  const { header, footer, socialMedia } = entertainmentSocialMediaParagraphs;
  const isTabletPortrait =
    screenWidth > 767 && screenWidth < 1025 && isPortrait;

  const handleGifOnClick = (): void => {
    window.open(
      'https://www.tiktok.com/@shanelleprod/video/7204569044148620586?_r=1&_t=8bev2ITwRr3',
      '_blank',
      'noopener, noreferrer'
    );
  };

  const getYoutubeVideoDimensions = (): { height: string; width: string } => {
    let videoDimensions = {
      height: '510',
      width: '915',
    };
    if (screenWidth > 767 && screenWidth < 1025) {
      videoDimensions = {
        height: '382',
        width: '676',
      };
    } else if (screenWidth < 768) {
      videoDimensions = {
        height: '180',
        width: '322',
      };
    }
    return videoDimensions;
  };

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
          <h1 className="shanelle-bold-text text-uppercase ps-3 mb-4 mt-4">
            {sectionTitle}
          </h1>
        )}
        <div className="shanelle-entertainment-main-container m-auto">
          <p className="mt-3 mb-3">{translate(firstParagraph)}</p>
          <Row
            md={2}
            xs={1}
            lg={2}
            className={`w-${screenWidth > 1024 ? '75' : '100'} m-auto mt-5`}
          >
            <Col className="d-flex justify-content-center align-items-center">
              <div className="animate__animated animate__fadeIn animate__delay-0-5s">
                <Image
                  alt="Tik Tok GIF"
                  className="shanelle-tik-tok-gif transition scale"
                  fluid
                  onClick={handleGifOnClick}
                  src={TikTokGif}
                />
              </div>
            </Col>
            <Col className={screenWidth < 768 ? 'mt-4' : ''}>
              <p
                className={`animate__animated animate__fadeIn animate__delay-1s ${
                  screenWidth < 768 ? 'text-center' : ''
                }`}
              >
                {translate(header)}
              </p>
              {socialMedia.map((item) => (
                <EntertainmentSocialMediaCard key={item.id} {...item} />
              ))}
            </Col>
          </Row>
          <p
            className={`w-${
              screenWidth > 1024 ? '90' : '100'
            } animate__animated animate__fadeIn animate__delay-3-5s text-center p-0 mb-0 fs-6`}
          >
            {translate(footer)}
          </p>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-5 mb-5 d-block m-auto transition scale"
            frameBorder="0"
            src="https://www.youtube.com/embed/pB0PnCSarLw"
            style={{ borderRadius: '20px' }}
            title="YouTube video player"
            {...getYoutubeVideoDimensions()}
          ></iframe>
          <p className="mt-3 mb-3">{translate(secondParagraph)}</p>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-5 mb-5 d-block m-auto transition scale"
            frameBorder="0"
            src="https://www.youtube.com/embed/GiCxwaTZ4eg"
            style={{ borderRadius: '20px' }}
            title="YouTube video player"
            {...getYoutubeVideoDimensions()}
          ></iframe>
          <p className="mt-3 mb-3">{translate(thirdParagraph)}</p>
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
          <p>{translate(fourthParagraph)}</p>
          <Row
            md={1}
            xs={1}
            lg={3}
            className={`${
              screenWidth < 768 ? 'w-100 ms-0 me-0' : ''
            } g-3 position-relative ${
              screenWidth > 1023 && 'justify-content-center'
            }`}
          >
            {entertainment.map((item) => (
              <Col
                {...(screenWidth > 1023 && { style: { width: '30%' } })}
                className={screenWidth > 767 ? 'p-3' : 'ps-0 pe-0 mb-4'}
                key={item.id}
              >
                <EntertainmentSocialCard {...item} />
              </Col>
            ))}
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
