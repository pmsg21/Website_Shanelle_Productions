// REACT IMPORTS
import { ReactElement, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";

// DATA
import { films } from "../data/film";

// HOOKS
import { useLanguage, useScreenDimensions } from "../hooks";

// ASSETS

// COMPONENTS
import { Footer } from "../components/shared";
import { FilmCard } from "../components/film";

export const Film = (): ReactElement => {
  const { isPhone, isDesktop, isTablet } = useScreenDimensions();
  const { siteLanguage } = useLanguage();

  const sectionTitle = useMemo(
    () => (siteLanguage === "en" ? "Film" : "Cine"),
    [siteLanguage]
  );

  const sectionDescription = useMemo(
    () =>
      siteLanguage === "en"
        ? `Explore the projects we've contributed to as sound designers, sound mixers, dialogue editors, and more.`
        : `Explora los proyectos en los que hemos contribuido como diseñadoras de sonido, mezcladoras de sonido, editoras de diálogos y más.`,
    [siteLanguage]
  );

  const renderTitle = () => (
    <h1
      className={`${
        isDesktop ? "shanelle-rotated-text" : ""
      } shanelle-extra-bold-text shanelle-projects-title text-uppercase`}
    >
      {sectionTitle}
    </h1>
  );

  return (
    <section id="film-section">
      <Container
        className={`mt-${
          isPhone ? "0" : "5"
        } p-0 animate__animated animate__fadeIn`}
      >
        {(isPhone || isTablet) && (
          <h1
            className={`shanelle-bold-text text-uppercase ps-3 my-4 ${
              isTablet ? "ps-4 m-auto w-90" : ""
            }`}
          >
            {sectionTitle}
          </h1>
        )}
        <p
          className={`${isPhone || isTablet ? "my-4" : "mt-6 mb-5"} ${
            !isPhone ? "px-4" : ""
          } w-90 d-block m-auto`}
        >
          {sectionDescription}
        </p>
        <Row
          md={2}
          xs={1}
          lg={3}
          className={`${
            isPhone
              ? "w-100 ms-0 me-0"
              : "shanelle-projects-row-container m-auto"
          } g-3 position-relative`}
        >
          {!isPhone && !isTablet && renderTitle()}
          {films.map((item) => (
            <Col
              className={`${!isPhone ? "p-4 pt-0 pb-4 mt-0" : "ps-3 pe-3"} ${
                !isPhone && !isDesktop ? "pb-0" : ""
              }`}
              key={item.id}
            >
              <FilmCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
      {!isPhone && (
        <Container>
          <Footer
            className={`${
              !isDesktop ? "mt-4 mb-5" : "mt-6 mb-4"
            } animate__animated animate__fadeIn animate__delay-1-5s`}
          />
        </Container>
      )}
    </section>
  );
};

export default Film;
