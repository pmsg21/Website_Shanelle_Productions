import { Entertainment } from '../../interfaces/entertainment';
import { Row, Col, Image } from 'react-bootstrap';
import Instagram from '../../assets/images/entertainment/instagram.svg';
import Tiktok from '../../assets/images/entertainment/tiktok.svg';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

export const EntertainmentSocialCard = ({
  at,
  className,
  description,
  image,
  imageAlt,
  instagramURL,
  tiktokUrl,
}: Entertainment) => {
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
          <Col>
            <h4>{at}</h4>
            <div dangerouslySetInnerHTML={{ __html: description }} />
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
          </Col>
        </Row>
      </div>
    </div>
  );
};
