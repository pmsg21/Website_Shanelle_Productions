import { Col, Container, Image, Row } from 'react-bootstrap';
import { ContactForm } from '../components/contact/ContactForm';
import { Footer } from '../components/shared/Footer';
import { useScreenDimensions } from '../hooks/useScreenDimensions';
import ContactImage from '../assets/images/contact/contact-bg-tablet.svg';

export const Contact = () => {
  const { screenWidth, screenHeight, isPortrait } = useScreenDimensions();
  const isTabletPortrait =
    screenWidth > 767 && screenWidth < 1025 && isPortrait;

  return (
    <section id="contact-section">
      <div
        className={`${
          screenWidth > 1024 || isTabletPortrait
            ? 'shanelle-contact-container'
            : ''
        } w-100`}
      >
        {screenWidth > 1024 && <div className="shanelle-contact-bg"></div>}
        {screenWidth > 767 && screenWidth < 1025 && !isPortrait ? (
          <Image
            className="mt-0 w-100 ps-4"
            alt="Contact Image"
            src={ContactImage}
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
                screenWidth < 1025 ? 'ps-4 pe-4' : ''
              } shanelle-contact-form-container`}
            >
              <h1
                className={`mt-${
                  screenWidth > 1024 && screenWidth < 1301 ? '0' : '4'
                } shanelle-${
                  screenWidth > 767 ? 'extra-' : ''
                }bold-text mb-4 shanelle-contact-form-title`}
              >
                Get in touch
              </h1>
              <p>
                We are happy to answer any of your questions,
                {screenWidth > 767 ? <br /> : ' '}and get to know you and your
                project.
              </p>
              <p className="mb-4">
                Reach out to us and we will respond as soon
                {screenWidth < 768 ? <br /> : ' '}as we can.
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
