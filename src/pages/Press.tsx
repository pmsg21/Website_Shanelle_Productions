// REACT IMPORTS
import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

// DATA
import { press } from "../data/press";

// HOOKS
import { useLanguage, useScreenDimensions } from "../hooks";

// COMPONENTS
import { Footer } from "../components/shared";
import { PressCard } from "../components/press";

export const Press = (): ReactElement => {
  const { screenWidth, isDesktop, isPhone } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const sectionTitle = siteLanguage === "en" ? "Press" : "Prensa";

  return (
    <section id="press-section">
      <Container
        className={`mt-${
          isPhone ? "0" : "6"
        } p-0 animate__animated animate__fadeIn`}
      >
        {isPhone ? (
          <h1 className="shanelle-bold-text text-uppercase ps-3 mb-4">
            {sectionTitle}
          </h1>
        ) : null}
        <Row
          md={2}
          xs={1}
          lg={3}
          className={`${
            isPhone ? "w-100 ms-0 me-0" : ""
          } g-3 position-relative`}
        >
          {!isPhone ? (
            <h1
              className={`${
                isDesktop ? "shanelle-rotated-text" : "position-absolute"
              } shanelle-extra-bold-text shanelle-press-title ${
                siteLanguage === "es" ? "shanelle-press-title-es" : ""
              } text-uppercase`}
            >
              {sectionTitle}
            </h1>
          ) : null}
          {press.map((item) => (
            <Col className={!isPhone ? "p-3" : "ps-3 pe-3 mb-4"} key={item.id}>
              <PressCard {...item} className="transition scale" />
            </Col>
          ))}
        </Row>
        {!isPhone ? (
          <Footer
            className={`mt-5 mb-${
              screenWidth < 1025 ? "5" : "4"
            } animate__animated animate__fadeIn animate__delay-0-5s`}
          />
        ) : null}
      </Container>
    </section>
  );
};

export default Press;
