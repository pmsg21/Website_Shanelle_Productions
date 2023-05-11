// REACT IMPORTS
import { Col, Container, Image, Row } from 'react-bootstrap';

// HOOKS
import { useLanguage } from '../hooks/useLanguage';
import { useScreenDimensions } from '../hooks/useScreenDimensions';

// ASSETS
import ContactImageEn from '../assets/images/contact/contact-bg-tablet-en.svg';
import ContactImageEs from '../assets/images/contact/contact-bg-tablet-es.svg';

// COMPONENTS
import { ContactForm } from '../components/contact/ContactForm';
import { Footer } from '../components/shared/Footer';

export const Contact = (): JSX.Element => {
  const { screenWidth, screenHeight, isPortrait } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const isTabletPortrait =
    screenWidth > 767 && screenWidth < 1025 && isPortrait;

  return (
    <section id="contact-section">
      <div
        className={`${
          screenWidth > 1024 || isTabletPortrait
            ? `shanelle-contact-container shanelle-contact-container-${siteLanguage}`
            : ''
        } w-100`}
      >
        {screenWidth > 1024 && (
          <div
            className={`shanelle-contact-bg shanelle-contact-bg-${siteLanguage}`}
          ></div>
        )}
        {screenWidth > 767 && screenWidth < 1025 && !isPortrait ? (
          <Image
            className="mt-0 w-100 ps-4"
            alt="Contact Image"
            src={siteLanguage === 'en' ? ContactImageEn : ContactImageEs}
          />
        ) : null}
        <Container className="p-0 mt-0 animate__animated animate__fadeIn">
          <Row
            md={1}
            xs={1}
            lg={2}
            className={`${
              screenWidth < 768 ? 'w-100 ms-0 me-0' : ''
            } g-3 position-relative`}
          >
            <Col></Col>
            <Col
              className={`mt-${
                (screenWidth > 1024 && screenWidth < 1301) || isTabletPortrait
                  ? '6'
                  : screenWidth > 1300 && screenHeight > 800
                  ? '7'
                  : screenWidth > 1300 && screenHeight < 801
                  ? '5'
                  : '0'
              } ${
                screenWidth < 1025 ? 'ps-3 pe-3' : ''
              } shanelle-contact-form-container`}
            >
              <h1
                className={`mt-${
                  screenWidth > 1024 && screenWidth < 1301 ? '0' : '4'
                } shanelle-${
                  screenWidth > 767 ? 'extra-' : ''
                }bold-text mb-4 shanelle-contact-form-title`}
              >
                {siteLanguage === 'en'
                  ? 'Get in touch'
                  : 'Comunícate con nosotros'}
              </h1>
              <p>
                {siteLanguage === 'en'
                  ? 'We are happy to answer any of your questions'
                  : 'Estamos encantados de responder a cualquiera de tus preguntas'}
                ,{screenWidth > 1024 ? <br /> : ' '}
                {siteLanguage === 'en'
                  ? 'and get to know you and your project'
                  : 'y conocerte a ti y a tu proyecto'}
                .
              </p>
              <p className="mb-4">
                {siteLanguage === 'en'
                  ? 'Reach out to us and we will respond as soon'
                  : 'Comunícate con nosotros y te responderemos tan pronto'}
                {screenWidth < 768 ? <br /> : ' '}
                {siteLanguage === 'en' ? 'as we can' : 'como podamos'}.
              </p>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Footer
          className={`mt-${
            screenWidth > 1300 && screenHeight > 800
              ? '8'
              : screenWidth > 1300 && screenHeight < 801
              ? '6'
              : '5'
          } mb-3 ${
            screenWidth > 1300 && screenHeight > 800
              ? 'shanelle-fixed-footer position-fixed w-100'
              : ''
          } animate__animated animate__fadeIn animate__delay-0-5s`}
        />
      </Container>
    </section>
  );
};

export default Contact;
