// REACT IMPORTS
import { ReactElement } from "react";
import { Row, Col, Image } from "react-bootstrap";

// INTERFACES
import { OurOriginals } from "../../interfaces/our-originals";

// ASSETS
import Instagram from "../../assets/images/our-originals/instagram.svg";
import Tiktok from "../../assets/images/our-originals/tiktok.svg";
import { useScreenDimensions } from "../../hooks";

export const OurOriginalsSocialCard = ({
  at,
  instagramURL,
  tiktokUrl,
}: OurOriginals): ReactElement => {
  const { isPhone } = useScreenDimensions();

  return (
    <div
      className={`shanelle-container shanelle-entertainment-bottom-container ${
        isPhone ? "w-75 d-block m-auto" : ""
      }`}
    >
      <div
        className={`shanelle-inner-container p-${
          isPhone ? "4" : "2"
        } pt-3 d-flex justify-content-center`}
      >
        <Row>
          <Col className="shanelle-entertainment-card-description-container">
            <h3>{at}</h3>
            <div className={`d-flex gap-2 ${isPhone ? "d-block m-auto" : ""}`}>
              <a href={instagramURL} target="_blank" rel="noopener noreferrer">
                <Image
                  alt="Instagram"
                  className="transition scale-1-2"
                  fluid
                  src={Instagram}
                />
              </a>
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
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
