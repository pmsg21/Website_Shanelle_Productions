// REACT IMPORTS
import { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";

// HOOKS
import { useLanguage, useScreenDimensions } from "../../hooks";

// COMPONENTS
import { AnimatedHeading } from "../shared";

// ASSETS
import Separator from "../../assets/images/shared/separator.svg";
import LinkIcon from "../../assets/images/about/link.svg";
import Michelle from "../../assets/images/about/michelle-lugo-headshot.png";
import Shana from "../../assets/images/about/shana-pilonieta-headshot.png";
import AesMember from "../../assets/images/about/aes-member.png";

export const AboutCreators = (): ReactElement => {
  const { siteLanguage } = useLanguage();
  const { isDesktop, isPhone } = useScreenDimensions();
  const creatorsText = siteLanguage === "en" ? "Creators" : "Creadoras";

  const getAesMemberImage = () => (
    <Image
      fluid
      alt="AES Member"
      src={AesMember}
      className={`scale transition d-block m-auto ${
        isPhone ? "w-40 mb-4" : "w-65"
      }`}
    />
  );

  return (
    <div
      className={`${
        isDesktop ? "shanelle-container" : ""
      } position-relative mb-${
        isPhone ? "2" : "5"
      } animate__animated animate__fadeIn animate__delay-1s`}
    >
      <div
        className={`${
          isDesktop ? "shanelle-inner-container p-5" : "p-0"
        } shanelle-creator-container`}
      >
        {isDesktop ? (
          <AnimatedHeading
            className={"position-absolute ps-3 pe-3"}
            Heading="h1"
            text={creatorsText}
          />
        ) : (
          <div
            className={`d-flex align-items-center mb-${isPhone ? "3" : "5"}`}
          >
            <AnimatedHeading
              className="me-4"
              Heading="h1"
              text={creatorsText}
            />
            {!isPhone && (
              <Image
                alt="Separator"
                className="flex-grow-1 w-50"
                fluid
                src={Separator}
              />
            )}
          </div>
        )}
        <Row className="position-relative">
          <Col md={6} xs={12} lg={6}>
            <Image
              fluid
              alt="Shana"
              src={Shana}
              className={`scale transition d-block m-auto ${
                isPhone ? "w-60" : ""
              }`}
            />
            <div className="shanelle-creator-details shana">
              <AnimatedHeading
                className="text-center mt-3"
                Heading="h2"
                text="Shana"
              />
              <p className="text-center mb-0">Alexandra Alvarez Pilonieta</p>
              <p className="text-center">
                {siteLanguage === "en" ? "Co-Founder of " : "Co-fundadora de "}
                Shanelle Productions
              </p>
              <p className="text-center">
                <a
                  href="https://www.imdb.com/name/nm10097060/?ref_=nv_sr_srsg_0"
                  target="_blank"
                  className="link transition"
                  rel="noopener noreferrer"
                >
                  {siteLanguage === "en" ? "Go to " : "Visita "}IMDb
                  <Image
                    fluid
                    alt="Link Icon"
                    src={LinkIcon}
                    className="ms-2 mb-1"
                  />
                </a>
              </p>
              {getAesMemberImage()}
            </div>
          </Col>
          <Col md={6} xs={12} lg={6}>
            <Image
              fluid
              alt="Michelle"
              src={Michelle}
              className={`scale transition d-block m-auto ${
                isPhone ? "w-60" : ""
              }`}
            />
            <div className="shanelle-creator-details michelle">
              <AnimatedHeading
                className="text-center mt-3"
                Heading="h2"
                text="Mich"
              />
              <p className="text-center mb-0">Michelle Deniesse</p>
              <p className="text-center">
                {siteLanguage === "en" ? "Co-Founder of " : "Co-fundadora de "}
                Shanelle Productions
              </p>
              <p className="text-center">
                <a
                  href="https://www.imdb.com/name/nm10097059/?ref_=nv_sr_srsg_0"
                  target="_blank"
                  className="link transition"
                  rel="noopener noreferrer"
                >
                  {siteLanguage === "en" ? "Go to " : "Visita "}IMDb
                  <Image
                    fluid
                    alt="Link Icon"
                    src={LinkIcon}
                    className="ms-2 mb-1"
                  />
                </a>
              </p>
              {getAesMemberImage()}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
