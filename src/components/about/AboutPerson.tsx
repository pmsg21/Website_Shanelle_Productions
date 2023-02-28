import { AboutPersonProps } from '../../interfaces/about';
import { AboutTitle } from './AboutTitle';
import { Col, Image, Row } from 'react-bootstrap';
import { useLanguage } from '../../hooks/useLanguage';
import LinkIcon from '../../assets/images/about/link.svg';

export const AboutPerson = ({
  person: {
    firstParagraph,
    id,
    image,
    imageAlt,
    imagePhone,
    imdb,
    secondParagraph,
    thirdParagraph,
    title,
    titleClass,
    titleImage,
  },
  screenWidth,
  isPortrait,
}: AboutPersonProps) => {
  const { siteLanguage } = useLanguage();

  return (
    <div
      className={`p-${
        screenWidth > 1024 ? '5' : screenWidth < 768 ? '0' : '3'
      } m-auto animate__animated animate__fadeIn animate__delay-1${
        id === 1 ? '' : '-5'
      }s shanelle-container shanelle-about-us-container position-relative ${
        screenWidth > 767 ? 'mt-7 mb-5' : 'mt-3 mb-3'
      }`}
    >
      <div className="shanelle-inner-container shanelle-person-container">
        <Row>
          <Col
            md={!isPortrait ? 12 : 5}
            xs={12}
            lg={4}
            className={`${
              screenWidth < 768 ? 'mb-3' : ''
            } shanelle-about-us-image-container`}
          >
            <Image
              fluid
              alt={imageAlt}
              src={screenWidth > 767 ? image : imagePhone}
              className="d-block m-auto scale transition position-relative"
            />
          </Col>
          <Col
            md={!isPortrait ? 12 : 7}
            xs={12}
            lg={8}
            className={screenWidth < 768 ? 'p-1' : ''}
          >
            {screenWidth < 768 ? (
              <Image
                fluid
                alt={title}
                src={titleImage}
                className="d-block m-auto"
              />
            ) : (
              <AboutTitle
                title={title}
                classes={`${
                  screenWidth > 1024 ||
                  (screenWidth > 767 && screenWidth < 1025 && isPortrait)
                    ? 'position-absolute ps-3 pe-3'
                    : 'text-center'
                } shanelle-name ${titleClass}`}
              />
            )}

            <p className="mt-4">
              {firstParagraph[siteLanguage as keyof typeof firstParagraph]}
            </p>
            <p>
              {secondParagraph[siteLanguage as keyof typeof secondParagraph]}
            </p>
            <p>{thirdParagraph[siteLanguage as keyof typeof thirdParagraph]}</p>
            <p className={`${screenWidth < 768 ? 'mt-4' : ''} text-end mb-0`}>
              <a href={imdb} target="_blank" className="link transition">
                {siteLanguage === 'en' ? 'Go to ' : 'Visita '}IMDb
                <Image
                  fluid
                  alt="Link Icon"
                  src={LinkIcon}
                  className="ms-2 mb-1"
                />
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
