// REACT IMPORTS
import { ReactElement } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

// INTERFACES
import { Entertainment } from '../../interfaces/entertainment';

// HOOKS
import { useScreenDimensions } from '../../hooks';

// ASSETS
import Instagram from '../../assets/images/entertainment/instagram.svg';
import Tiktok from '../../assets/images/entertainment/tiktok.svg';

export const EntertainmentSocialCard = ({
  at,
  image,
  imageAlt,
  instagramURL,
  tiktokUrl,
}: Entertainment): ReactElement => {
  const { screenWidth, isPortrait } = useScreenDimensions();
  const isTabletPortrait =
    screenWidth > 767 && screenWidth < 1025 && isPortrait;

  return (
    <div
      className={`${
        screenWidth > 767 && screenWidth < 1025 && !isTabletPortrait
          ? 'w-75 m-auto'
          : ''
      } shanelle-container shanelle-entertainment-container`}
    >
      <div className="shanelle-inner-container p-2 pt-3">
        <Row>
          <Col>
            <Image
              fluid
              alt={imageAlt}
              src={image}
              className="d-block m-auto transition scale"
            />
          </Col>
          <Col className="shanelle-entertainment-card-description-container">
            <h3>{at}</h3>
            <div>
              <a href={instagramURL} target="_blank">
                <Image
                  alt="Instragam"
                  className="transition scale-1-2"
                  fluid
                  src={Instagram}
                />
              </a>
              <a href={tiktokUrl} target="_blank">
                <Image
                  alt="Tiktok"
                  className="transition scale-1-2"
                  fluid
                  src={Tiktok}
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
