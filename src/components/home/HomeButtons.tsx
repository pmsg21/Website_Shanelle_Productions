// REACT IMPORTS
import { ReactElement } from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// ASSETS
import MediaContentBannerEn from '../../assets/images/home/media-content-banner-en.svg';
import MediaContentBannerEs from '../../assets/images/home/media-content-banner-es.svg';
import MediaContentBannerTabletEs from '../../assets/images/home/media-content-banner-tablet-es.svg';
import MediaContentBannerTabletEn from '../../assets/images/home/media-content-banner-tablet-en.svg';
import MediaContentBannerPhoneEn from '../../assets/images/home/media-content-banner-phone-en.svg';
import MediaContentBannerPhoneEs from '../../assets/images/home/media-content-banner-phone-es.svg';

// HOOKS
import { useLanguage, useScreenDimensions } from '../../hooks';

export const HomeButtons = (): ReactElement => {
  const { isPhone, isTablet, scrollIntoView, screenWidth } =
    useScreenDimensions();
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
      window.open(
        'https://www.shanelleproductions.store',
        '_blank',
        'noopener, noreferrer'
      );
    } else {
      isPhone ? scrollIntoView(id) : navigate(to);
    }
  };

  return (
    <Container className={isPhone ? 'p-0' : ''}>
      <div className="home-buttons-flex-container">
        <div className="home-buttons-container">
          <Image
            alt="Media Content Banner"
            className={isPhone ? 'w-100' : ''}
            fluid
            src={
              isPhone
                ? siteLanguage === 'en'
                  ? MediaContentBannerPhoneEn
                  : MediaContentBannerPhoneEs
                : isTablet
                ? siteLanguage === 'en'
                  ? MediaContentBannerTabletEn
                  : MediaContentBannerTabletEs
                : siteLanguage === 'en'
                ? MediaContentBannerEn
                : MediaContentBannerEs
            }
          />
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
