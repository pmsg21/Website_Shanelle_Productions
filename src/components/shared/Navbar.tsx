// REACT IMPORTS
import { ReactElement, useState } from 'react';
import { Navbar as NavbarBS, Container, Nav, Image } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

// ROUTES
import { routes } from '../../routes/routes';

// HOOKS
import { useLanguage, useScreenDimensions, useTranslation } from '../../hooks';

// ASSETS
import English from '../../assets/images/shared/english.svg';
import HamburgerIcon from '../../assets/images/shared/hamburger-icon.svg';
import LogoWhite from '../../assets/images/shared/logo-white.svg';
import Spanish from '../../assets/images/shared/spanish.svg';

export const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const { screenWidth, scrollIntoView } = useScreenDimensions();
  const { siteLanguage, handleLanguageChange } = useLanguage();
  const { translate } = useTranslation();
  const navigate = useNavigate();
  const storeText = siteLanguage === 'en' ? 'Store' : 'Tienda';

  function handleScrollIntoView(id: string): void {
    setIsOpen(false);
    scrollIntoView(id);
  }

  function redirectTo(to: string): void {
    setIsOpen(false);
    navigate(to);
  }

  function handleLanguageClick(): void {
    setIsOpen(false);
    handleLanguageChange();
  }

  function getLanguageIcon(): ReactElement {
    return (
      <div
        className="shanelle-language-container transition scale"
        onClick={handleLanguageClick}
      >
        <Image
          src={siteLanguage === 'en' ? Spanish : English}
          fluid
          alt="Language"
        />
        <span className="ms-1">E{siteLanguage === 'en' ? 'S' : 'N'}</span>
      </div>
    );
  }

  return (
    <>
      <NavbarBS
        className="shanelle-header"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container className="p-0">
          <NavbarBS.Brand
            to="/"
            as={NavLink}
            className="scale transition"
            onClick={() => {
              if (screenWidth < 768) handleScrollIntoView('home-section');
            }}
          >
            <Image
              src={LogoWhite}
              className={`d-inline-block align-top animate__animated animate__fadeIn animate__delay-0-5s ${
                screenWidth < 768 ? 'ms-3' : ''
              }`}
              alt="Shanelle Productions Logo White"
            />
          </NavbarBS.Brand>
          <Nav
            className="ms-auto animate__animated animate__fadeIn animate__delay-0-5s"
            navbarScroll
          >
            {screenWidth > 1023 ? (
              <>
                <a
                  className="me-3 transition scale shanelle-semi-bold-text align-self-center nav-link"
                  href="https://www.shanelleproductions.store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {storeText}
                </a>
                {routes
                  .filter((route): boolean => route.to !== '/')
                  .map(
                    ({ path, to, name }): ReactElement => (
                      <Nav.Link
                        className="me-3 transition scale shanelle-semi-bold-text"
                        key={path}
                        to={to}
                        as={NavLink}
                        onClick={(): void =>
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                          })
                        }
                      >
                        {translate(name)}
                      </Nav.Link>
                    )
                  )}
              </>
            ) : (
              <Image
                onClick={(): void => setIsOpen(!isOpen)}
                src={HamburgerIcon}
                className="me-3"
                alt="Hamburger Icon"
              />
            )}
            {screenWidth > 1023 && getLanguageIcon()}
          </Nav>
        </Container>
      </NavbarBS>
      {screenWidth < 1025 && isOpen ? (
        <div className="shanelle-mobile-menu position-fixed animate__animated animate__fadeIn p-3">
          <ul className="ps-0">
            {
              <>
                <li className="shanelle-semi-bold-text">
                  <a
                    className="nav-link"
                    href="https://www.shanelleproductions.store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {storeText}
                  </a>
                </li>
                {routes
                  .filter((route): boolean => route.to !== '/')
                  .map(
                    ({ path, id, name, to }): ReactElement => (
                      <li
                        className="shanelle-semi-bold-text"
                        key={path}
                        onClick={(): void => {
                          screenWidth < 768
                            ? handleScrollIntoView(id)
                            : redirectTo(to);
                        }}
                      >
                        {translate(name)}
                      </li>
                    )
                  )}
              </>
            }
            <li>{getLanguageIcon()}</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};
