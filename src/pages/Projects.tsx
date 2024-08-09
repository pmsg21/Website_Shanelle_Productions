// REACT IMPORTS
import {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// DATA
import {
  againTheSeries,
  againTheSeriesDetails,
  projects,
  projectsAward,
} from '../data/projects';

// HOOKS
import {
  useDetectScrollTop,
  useLanguage,
  useScreenDimensions,
  useTranslation,
} from '../hooks';

// ASSETS
import AgainTheSeriesLogo from '../assets/images/projects/again-the-series-logo.png';
import AgainTheSeriesPoster from '../assets/images/projects/again-the-series-poster.png';
import LinkIcon from '../assets/images/about/link.svg';
import ShanelleYoutubeAwardIcon from '../assets/images/projects/shanelle-youtube-award-icon.svg';
import ShanelleYoutubeAwardOne from '../assets/images/projects/shanelle-youtube-award-1.png';
import ShanelleYoutubeAwardThree from '../assets/images/projects/shanelle-youtube-award-3.png';
import ShanelleYoutubeAwardTwo from '../assets/images/projects/shanelle-youtube-award-2.png';

// COMPONENTS
import { Footer } from '../components/shared';
import { ProjectCard } from '../components/projects';

export const Projects = (): ReactElement => {
  const [animate, setAnimate] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { isPhone, screenWidth, isTablet } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();
  const awardsContainerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const isTopOfElement = useDetectScrollTop(awardsContainerRef);
  const sectionTitle = siteLanguage === 'en' ? 'Projects' : 'Proyectos';
  const topProjectTitle =
    siteLanguage === 'en'
      ? 'MEET OUR NEW ORIGINAL SERIES'
      : 'CONOCE NUESTRA NUEVA SERIE ORIGINAL';

  const images = [
    ShanelleYoutubeAwardOne,
    ShanelleYoutubeAwardTwo,
    ShanelleYoutubeAwardThree,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 0);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  useEffect(() => {
    if (animate) {
      const animationTimeout = setTimeout(() => {
        setAnimate(false);
      }, 1000);

      return () => clearTimeout(animationTimeout);
    }
  }, [animate]);

  const getAgainProjectFooter = () => (
    <>
      <p className="my-3 shanelle-extra-bold-text">
        {translate(againTheSeriesDetails)}
      </p>
      <p
        className={`${isPhone || isTablet ? 'text-end' : ''} ${
          isTablet ? 'mb-0' : ''
        } mt-0`}
      >
        <a
          className="link transition shanelle-semi-bold-text"
          href="https://www.imdb.com/title/tt32811959/?ref_=nm_knf_t_1"
          rel="noopener noreferrer"
          target="_blank"
        >
          {siteLanguage === 'en' ? 'Go to ' : 'Visita '}IMDb
          <Image alt="Link Icon" className="ms-2 mb-1" fluid src={LinkIcon} />
        </a>
      </p>
      {isPhone && (
        <Image
          fluid
          alt="Again The Series Poster"
          src={AgainTheSeriesPoster}
          className="my-2 d-block m-auto"
        />
      )}
      <div className="d-flex justify-content-center mt-3">
        <Button
          className="home-buttons shanelle-bold-text transition scale"
          type="button"
          onClick={() => {
            window.open(
              'https://www.youtube.com/watch?v=8dW5qkfo52I',
              '_blank',
              'noopener, noreferrer'
            );
          }}
        >
          <h5 className="mb-0">
            {siteLanguage === 'en' ? 'WATCH EP. 1' : 'VER CAP. 1'}
          </h5>
        </Button>
      </div>
    </>
  );

  return (
    <section id="projects-section">
      <Container
        className={`mt-${
          isPhone ? '0' : '5'
        } p-0 animate__animated animate__fadeIn`}
      >
        <Row
          className={`${isPhone ? 'w-100 ms-0 me-0' : 'm-auto mb-6'} ${
            !isPhone && isTablet ? 'px-0' : 'px-4'
          } g-3 position-relative shanelle-projects-row-container`}
        >
          {screenWidth > 767 && (
            <Col className="px-0" lg={4} md={6}>
              <Image
                fluid
                alt="Again The Series Poster"
                src={AgainTheSeriesPoster}
                className="transition scale"
              />
            </Col>
          )}
          <Col lg={8} md={6} xs={12}>
            <h2
              className={`shanelle-extra-bold-text text-center ${
                isPhone ? 'mt-5' : ''
              }`}
            >
              {topProjectTitle}
            </h2>
            <Image
              alt="Again The Series Logo"
              className="transition scale d-block m-auto"
              fluid
              src={AgainTheSeriesLogo}
            />
            <p
              className={`${
                isTablet ? 'mb-0 px-2' : 'mb-3'
              } shanelle-again-project-description`}
            >
              {translate(againTheSeries)}
            </p>
            {!isTablet && getAgainProjectFooter()}
          </Col>
          {isTablet && getAgainProjectFooter()}
        </Row>
        {isPhone ? (
          <h1 className="shanelle-bold-text text-uppercase ps-3 my-4">
            {sectionTitle}
          </h1>
        ) : null}
        <Row
          md={2}
          xs={1}
          lg={3}
          className={`${
            isPhone
              ? 'w-100 ms-0 me-0'
              : 'shanelle-projects-row-container m-auto'
          } g-3 position-relative`}
        >
          {screenWidth > 767 ? (
            <h1
              className={`${
                screenWidth > 1024 ? 'shanelle-rotated-text' : ''
              } shanelle-extra-bold-text shanelle-projects-title ${
                siteLanguage === 'es' ? 'shanelle-projects-title-es' : ''
              } text-uppercase`}
            >
              {sectionTitle}
            </h1>
          ) : null}
          {projects.map((item) => (
            <Col
              className={`${
                screenWidth > 767 ? 'p-4 pt-0 pb-4 mt-0' : 'ps-3 pe-3'
              } ${screenWidth > 767 && screenWidth < 1025 ? 'pb-0' : ''}`}
              key={item.id}
            >
              <ProjectCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
      <div
        className={`position-relative d-flex ${
          isTablet ? 'mt-2 mb-5' : 'mt-5'
        }`}
        ref={awardsContainerRef}
      >
        <div
          className={`w-100 shanelle-award-background ${
            isPhone
              ? 'opacity-1'
              : isTopOfElement
              ? 'animate__animated animate__fadeIn opacity-1  animate__delay-0-5s'
              : 'opacity-0'
          }`}
        ></div>

        <Container className={`${isPhone ? 'p-0' : ''}`}>
          <Row
            md={2}
            xs={1}
            lg={2}
            className={`${isPhone ? 'w-100 ms-0 me-0' : ''} g-3`}
          >
            <Col
              className={`${
                isPhone
                  ? 'opacity-1 ps-0 pe-0'
                  : isTopOfElement
                  ? 'animate__animated animate__fadeInLeft opacity-1  animate__delay-0-5s'
                  : 'opacity-0'
              }`}
            >
              <div style={isPhone ? { backgroundColor: '#10060f' } : {}}>
                <Image
                  fluid
                  alt="Shanelle Youtube Award"
                  src={images[currentImage]}
                  className={`d-block m-auto ${
                    screenWidth > 767 ? 'rounded-3' : 'position-relative'
                  } transition scale shanelle-projects-award-image ${
                    animate ? 'animate__animated animate__fadeIn' : ''
                  }`}
                />
              </div>
            </Col>
            <Col className="shanelle-projects-award-text-container d-flex position-relative">
              {screenWidth > 767 ? (
                <Image
                  fluid
                  alt="Shanelle Youtube Award Icon"
                  src={ShanelleYoutubeAwardIcon}
                  className={`position-absolute shanelle-projects-award-icon ps-5 ${
                    isPhone
                      ? 'opacity-1'
                      : isTopOfElement
                      ? 'animate__animated animate__fadeInRight opacity-1  animate__delay-0-5s'
                      : 'opacity-0'
                  }`}
                />
              ) : null}
              <p
                className={`${screenWidth > 767 ? 'p-5 ps-0' : 'p-4 mb-0'} ${
                  isPhone
                    ? 'opacity-1'
                    : isTopOfElement
                    ? 'animate__animated animate__fadeInRight opacity-1 animate__delay-0-5s'
                    : 'opacity-0'
                } shanelle-projects-award ${
                  isTablet ? 'align-self-end py-0 px-2' : ''
                }`}
              >
                {translate(projectsAward)}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      {screenWidth > 767 ? (
        <Container>
          <Footer
            className={`${
              screenWidth < 1025 ? 'mt-4 mb-5' : 'mt-6 mb-4'
            } animate__animated animate__fadeIn animate__delay-1-5s`}
          />
        </Container>
      ) : null}
    </section>
  );
};

export default Projects;
