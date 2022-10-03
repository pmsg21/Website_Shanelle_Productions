import { Navbar as NavbarBS, Container, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useState } from 'react';
import HambugerIcon from '../../assets/images/shared/hamburger-icon.svg';
import LogoWhite from '../../assets/images/shared/logo-white.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { screenWidth } = useScreenDimensions();

  const handleScrollIntoView = (id: string) => {
    setIsOpen(false);
    const scrollDiv = document.getElementById(id)?.offsetTop;
    window.scrollTo({
      top: scrollDiv ? scrollDiv - 100 : 0,
      behavior: 'smooth',
    });
  };

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
            {screenWidth > 767 ? (
              routes
                .filter((route) => route.to !== '/')
                .map(({ path, to, name }) => (
                  <Nav.Link
                    className="me-3 transition scale shanelle-bold-text"
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
                    {name}
                  </Nav.Link>
                ))
            ) : (
              <div>
                <Image
                  onClick={() => setIsOpen(!isOpen)}
                  src={HambugerIcon}
                  className="d-inline-block align-top animate__animated animate__fadeInRight animate__delay-0-5s me-3"
                  alt="Hamburger Icon"
                />
              </div>
            )}
          </Nav>
        </Container>
      </NavbarBS>
      {screenWidth < 768 && isOpen ? (
        <div className="shanelle-mobile-menu position-fixed animate__animated animate__fadeIn p-3">
          <ul className="ps-0">
            {routes
              .filter((route) => route.to !== '/')
              .map(({ path, id, name }) => (
                <li
                  className="shanelle-bold-text"
                  key={path}
                  onClick={() => {
                    handleScrollIntoView(id);
                  }}
                >
                  {name}
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
