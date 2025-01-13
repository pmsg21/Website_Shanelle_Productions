// REACT IMPORTS
import { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";

// INTERFACES
import { ServicesListItemProps } from "../../interfaces/components";

// HOOKS
import { useScreenDimensions, useTranslation } from "../../hooks";

// ASSETS
import Check from "../../assets/images/icons/check.svg";

export const ServicesListItem = ({
  description,
}: ServicesListItemProps): ReactElement => {
  const { isPortrait, isPhone } = useScreenDimensions();
  const { translate } = useTranslation();

  return (
    <li className={`mb-${isPhone ? "4" : 2}`}>
      <Row>
        <Col xs={1} md={1} lg={1} className={`pe-${!isPhone ? "0" : "2"}`}>
          <Image
            src={Check}
            alt="Check icon"
            className={`me-2 transition scale-1-2 check-icon ${
              !isPhone ? "d-block m-auto pt-1" : ""
            }`}
          />
        </Col>
        <Col
          xs={11}
          md={11}
          lg={11}
          className={`ps-${!isPhone && !isPortrait ? "0" : "2"}`}
        >
          {translate(description)}
        </Col>
      </Row>
    </li>
  );
};
