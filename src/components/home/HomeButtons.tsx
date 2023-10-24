// REACT IMPORTS
import { ReactElement } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// HOOKS
import { useLanguage, useScreenDimensions } from '../../hooks';

export const HomeButtons = (): ReactElement => {
  const { isPhone, scrollIntoView, screenWidth } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const navigate = useNavigate();

  const getButtonsStyle = (buttonMarginType: 's' | 'e'): string =>
    `d-block m${
      isPhone && screenWidth > 376 ? buttonMarginType : ''
    }-auto home-buttons shanelle-bold-text transition scale ps-${
      isPhone ? '2' : '5'
    } pe-${isPhone ? '2' : '5'}`;

  const handleClick = (to: string, id: string = ''): void => {
    if (to === '/store') {
      window.open('https://www.shanelleproductions.store', '_blank');
    } else {
      isPhone ? scrollIntoView(id) : navigate(to);
    }
  };

  return (
    <Container>
      <div className="home-buttons-flex-container">
        <div className="home-buttons-container">
          <Button
            onClick={() => handleClick('/store')}
            className={getButtonsStyle('s')}
            type="button"
          >
            <h3 className="mb-0">
              {siteLanguage === 'en' ? 'Store' : 'Tienda'}
            </h3>
          </Button>
          <Button
            onClick={() =>
              handleClick('/entertainment', 'entertainment-section')
            }
            className={getButtonsStyle('e')}
            type="button"
          >
            <h3 className="mb-0">
              {siteLanguage === 'en' ? 'Entertainment' : 'Entretenimiento'}
            </h3>
          </Button>
          <Button
            onClick={() => handleClick('/projects', 'projects-section')}
            className={getButtonsStyle('s')}
            type="button"
          >
            <h3 className="mb-0">
              {siteLanguage === 'en' ? 'Projects' : 'Proyectos'}
            </h3>
          </Button>
          <Button
            onClick={() => handleClick('/services', 'services-section')}
            className={getButtonsStyle('e')}
            type="button"
          >
            <h3 className="mb-0">
              {siteLanguage === 'en' ? 'Services' : 'Servicios'}
            </h3>
          </Button>
        </div>
      </div>
    </Container>
  );
};
