import { Navbar as NavbarBS, Container, Nav, Image } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useLanguage } from '../../hooks/useLanguage';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useState } from 'react';
import English from '../../assets/images/shared/english.svg';
import HamburgerIcon from '../../assets/images/shared/hamburger-icon.svg';
import LogoWhite from '../../assets/images/shared/logo-white.svg';
import Spanish from '../../assets/images/shared/spanish.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { screenWidth } = useScreenDimensions();
  const { siteLanguage, handleLanguageChange } = useLanguage();
  const navigate = useNavigate();

  function handleScrollIntoView(id: string) {
    setIsOpen(false);
    const scrollDiv = document.getElementById(id)?.offsetTop;
    window.scrollTo({
      top: scrollDiv ? scrollDiv - 100 : 0,
      behavior: 'smooth',
    });
  }

  function redirectTo(to: string) {
    setIsOpen(false);
    navigate(to);
  }

  function getLanguageIcon() {
    return (
      <div
        className="shanelle-language-container transition scale"
        onClick={handleLanguageChange}
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
              className={`d-inline-block align-top animate__animated animate__fadeInLeft animate__delay-0-5s ${
                screenWidth < 768 ? 'ms-3' : ''
              }`}
              alt="Shanelle Productions Logo White"
            />
          </NavbarBS.Brand>
          <Nav
            className="ms-auto animate__animated animate__fadeInRight animate__delay-0-5s"
            navbarScroll
          >
            {screenWidth > 1023 ? (
              routes
                .filter((route) => route.to !== '/')
                .map(({ path, to, name }) => (
                  <Nav.Link
                    className="me-3 transition scale shanelle-semi-bold-text"
                    key={path}
                    to={to}
                    as={NavLink}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })
                    }
                  >
                    {name[siteLanguage as keyof typeof name]}
                  </Nav.Link>
                ))
            ) : (
              <div>
                <Image
                  onClick={() => setIsOpen(!isOpen)}
                  src={HamburgerIcon}
                  className="d-inline-block align-top animate__animated animate__fadeInRight animate__delay-0-5s me-3"
                  alt="Hamburger Icon"
                />
              </div>
            )}
            {screenWidth > 1023 && getLanguageIcon()}
          </Nav>
        </Container>
      </NavbarBS>
      {screenWidth < 1025 && isOpen ? (
        <div className="shanelle-mobile-menu position-fixed animate__animated animate__fadeIn p-3">
          <ul className="ps-0">
            {routes
              .filter((route) => route.to !== '/')
              .map(({ path, id, name, to }) => (
                <li
                  className="shanelle-semi-bold-text"
                  key={path}
                  onClick={() => {
                    screenWidth < 768
                      ? handleScrollIntoView(id)
                      : redirectTo(to);
                  }}
                >
                  {name[siteLanguage as keyof typeof name]}
                </li>
              ))}
            <li>{getLanguageIcon()}</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};
