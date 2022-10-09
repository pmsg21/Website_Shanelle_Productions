import { Container, Row, Col, Image } from 'react-bootstrap';
import { Footer } from '../components/shared/Footer';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { useDetectScrollTop } from '../hooks/useDetectScrollTop';
import { useRef, MutableRefObject } from 'react';
import { useScreenDimensions } from '../hooks/useScreenDimensions';
import { Video } from '../components/projects/Video';
import ShanelleYoutubeAward from '../assets/images/projects/shanelle-youtube-award.png';
import ShanelleYoutubeAwardIcon from '../assets/images/projects/shanelle-youtube-award-icon.svg';
import ShanelleYoutubeAwardPhone from '../assets/images/projects/shanelle-youtube-award-phone.png';

export const Projects = () => {
  const awardsContainerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const isTopOfElement = useDetectScrollTop(awardsContainerRef);
  const { screenWidth } = useScreenDimensions();

  return (
    <section id="projects-section">
      <Container
        className={`mt-${
          screenWidth < 768 ? '0' : '5'
        } p-0 animate__animated animate__fadeIn`}
      >
        {screenWidth < 768 ? (
          <h1 className="shanelle-bold-text text-uppercase ps-5">Projects</h1>
        ) : null}
        <Video />
        <Row
          md={2}
          xs={1}
          lg={3}
          className={`${
            screenWidth < 768 ? 'w-100 ms-0 me-0' : ''
          } g-3 position-relative`}
        >
          {screenWidth > 767 ? (
            <h1
              className={`${
                screenWidth > 1024 ? 'shanelle-rotated-text' : ''
              } shanelle-extra-bold-text shanelle-projects-title text-uppercase`}
            >
              Projects
            </h1>
          ) : null}
          {projects.map((item) => (
            <Col
              className={`${screenWidth > 767 ? 'p-4' : 'ps-4 pe-4'} ${
                screenWidth > 767 && screenWidth < 1025 ? 'pb-0' : ''
              }`}
              key={item.id}
            >
              <ProjectCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="position-relative d-flex mt-5" ref={awardsContainerRef}>
        <div
          className={`w-100 shanelle-award-background ${
            screenWidth < 768
              ? 'opacity-1'
              : isTopOfElement
              ? 'animate__animated animate__fadeIn opacity-1  animate__delay-0-5s'
              : 'opacity-0'
          }`}
        ></div>
        {screenWidth > 767 ? (
          <Image
            fluid
            alt="Shanelle Youtube Award Icon"
            src={ShanelleYoutubeAwardIcon}
            className={`position-absolute shanelle-projects-award-icon ${
              screenWidth < 768
                ? 'opacity-1'
                : isTopOfElement
                ? 'animate__animated animate__fadeInRight opacity-1  animate__delay-0-5s'
                : 'opacity-0'
            }`}
          />
        ) : null}

        <Container
          className={`${screenWidth < 768 ? 'p-0' : ''} position-relative`}
        >
          <Row
            md={1}
            xs={1}
            lg={2}
            className={`${screenWidth < 768 ? 'w-100 ms-0 me-0' : ''} g-3`}
          >
            <Col
              className={`${
                screenWidth < 768
                  ? 'opacity-1 ps-0 pe-0'
                  : isTopOfElement
                  ? 'animate__animated animate__fadeInLeft opacity-1  animate__delay-0-5s'
                  : 'opacity-0'
              }`}
            >
              {screenWidth > 767 ? (
                <Image
                  fluid
                  alt="Shanelle Youtube Award"
                  src={ShanelleYoutubeAward}
                  className={`${
                    screenWidth > 1024
                      ? 'ps-4'
                      : 'd-block m-auto position-relative'
                  } transition scale shanelle-projects-award-image`}
                />
              ) : (
                <Image
                  fluid
                  alt="Shanelle Youtube Award Phone"
                  src={ShanelleYoutubeAwardPhone}
                  className="w-100 m-0 position-relative transition scale shanelle-projects-award-image"
                />
              )}
            </Col>
            <Col className="shanelle-projects-award-text-container d-flex">
              <p
                className={`p-${screenWidth > 767 ? '5' : '4 mb-0'} ${
                  screenWidth < 768
                    ? 'opacity-1'
                    : isTopOfElement
                    ? 'animate__animated animate__fadeInRight opacity-1  animate__delay-0-5s'
                    : 'opacity-0'
                } shanelle-projects-award`}
              >
                As social media content post-producers, Michelle and Alexandra
                have worked on several projects, highlighting their work for the
                YouTube channels{' '}
                <b>Novarise Invest, Novarise Latino, and Novarise Digital.</b>{' '}
                In 2020, Michelle and Alexandra received a{' '}
                <b>YouTube Creator Award</b> for their work on Novarise Latino.
                Currently, they are the Creative Directors of Novarise, a
                renowned financial education company.
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
