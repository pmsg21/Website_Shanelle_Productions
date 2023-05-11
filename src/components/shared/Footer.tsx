// REACT IMPORTS
import { Col, Image, Row } from 'react-bootstrap';

// DATA
import { footerLinks } from '../../data/footer-links';

// INTERFACES
import { FooterProps } from '../../interfaces/components';

// HOOKS
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

export const Footer = ({ className }: FooterProps): JSX.Element => {
  const { screenWidth } = useScreenDimensions();

  return (
    <footer className={className}>
      {screenWidth > 767 ? (
        <Row>
          <Col>
            <span className="transition brightness-200 shanelle-semi-bold-text">
              Shanelle Productions LLC ®
            </span>
          </Col>
          <Col className="d-flex justify-content-end">
            {footerLinks.map(({ alt, img, url }, index) => (
              <a
                key={alt}
                href={url}
                target="_blank"
                className={`me-${
                  index + 1 !== footerLinks.length ? '3' : '2'
                } transition scale-1-2 brightness-200`}
              >
                <Image alt={alt} src={img} />
              </a>
            ))}
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xs={12} className="d-flex justify-content-center mb-3">
            {footerLinks.map(
              ({ alt, img, url }, index): JSX.Element => (
                <a
                  key={alt}
                  href={url}
                  target="_blank"
                  className={`me-${
                    index + 1 !== footerLinks.length ? '3' : '2'
                  } transition scale-1-2 brightness-200`}
                >
                  <Image alt={alt} src={img} />
                </a>
              )
            )}
          </Col>
          <Col xs={12} className="text-center">
            <span className="transition brightness-200 text-center">
              Shanelle Productions LLC ®
            </span>
          </Col>
        </Row>
      )}
    </footer>
  );
};
