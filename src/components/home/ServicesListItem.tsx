import { Col, Image, Row } from 'react-bootstrap';
import { ServicesListItemProps } from '../../interfaces/components';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import Check from '../../assets/images/icons/check.svg';

export const ServicesListItem = ({ description }: ServicesListItemProps) => {
  const { screenWidth, isPortrait } = useScreenDimensions();

  return (
    <li className={`mb-${screenWidth < 768 ? '4' : 2}`}>
      <Row>
        <Col
          xs={1}
          md={1}
          lg={1}
          className={`pe-${screenWidth > 768 ? '0' : '2'}`}
        >
          <Image
            src={Check}
            alt="Check icon"
            className={`me-2 transition scale-1-2 check-icon ${
              screenWidth > 768 ? 'd-block m-auto pt-1' : ''
            }`}
          />
        </Col>
        <Col
          xs={11}
          md={11}
          lg={11}
          className={`ps-${screenWidth > 768 && !isPortrait ? '0' : '2'}`}
        >
          {description}
        </Col>
      </Row>
    </li>
  );
};
