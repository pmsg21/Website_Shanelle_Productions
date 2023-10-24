// REACT IMPORTS
import { ReactElement } from 'react';
import { Col, Image, Row } from 'react-bootstrap';

// INTERFACES
import { ServicesListItemProps } from '../../interfaces/components';

// HOOKS
import { useScreenDimensions, useTranslation } from '../../hooks';

// ASSETS
import Check from '../../assets/images/icons/check.svg';

export const ServicesListItem = ({
  description,
}: ServicesListItemProps): ReactElement => {
  const { screenWidth, isPortrait } = useScreenDimensions();
  const { translate } = useTranslation();

  return (
    <li className={`mb-${screenWidth < 768 ? '4' : 2}`}>
      <Row>
        <Col
          xs={1}
          md={1}
          lg={1}
          className={`pe-${screenWidth > 767 ? '0' : '2'}`}
        >
          <Image
            src={Check}
            alt="Check icon"
            className={`me-2 transition scale-1-2 check-icon ${
              screenWidth > 767 ? 'd-block m-auto pt-1' : ''
            }`}
          />
        </Col>
        <Col
          xs={11}
          md={11}
          lg={11}
          className={`ps-${screenWidth > 767 && !isPortrait ? '0' : '2'}`}
        >
          {translate(description)}
        </Col>
      </Row>
    </li>
  );
};
