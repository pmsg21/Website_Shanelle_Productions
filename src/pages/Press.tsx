import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../components/shared/Footer';
import { press } from '../data/press';
import { PressCard } from '../components/press/PressCard';
import { useScreenDimensions } from '../hooks/useScreenDimensions';

export const Press = () => {
  const { screenWidth } = useScreenDimensions();

  return (
    <Container
      id="press-section"
      className={`mt-${
        screenWidth < 768 ? '0' : '6'
      } p-0 animate__animated animate__fadeIn`}
    >
      {screenWidth < 768 ? (
        <h1 className="shanelle-bold-text text-uppercase ps-5 mb-4">Press</h1>
      ) : null}
      <Row
        md={2}
        xs={1}
        lg={3}
        className={`${
          screenWidth < 768 ? 'w-100 ms-0 me-0' : ''
        } g-3 position-relative`}
      >
        {screenWidth > 767 ? (
          <h1
            className={`${
              screenWidth > 1024 ? 'shanelle-rotated-text' : 'position-absolute'
            } shanelle-extra-bold-text shanelle-press-title text-uppercase`}
          >
            Press
          </h1>
        ) : null}
        {press.map((item) => (
          <Col
            className={screenWidth > 767 ? 'p-3' : 'ps-4 pe-4 mb-4'}
            key={item.id}
          >
            <PressCard {...item} className="transition scale" />
          </Col>
        ))}
      </Row>
      {screenWidth > 767 ? (
        <Footer
          className={`mt-5 mb-${
            screenWidth < 1025 ? '5' : '4'
          } animate__animated animate__fadeIn animate__delay-0-5s`}
        />
      ) : null}
    </Container>
  );
};

export default Press;
