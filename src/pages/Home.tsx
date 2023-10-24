// REACT IMPORTS
import { ReactElement, ReactNode } from 'react';
import { Container, Image } from 'react-bootstrap';

// HOOKS
import { useScreenDimensions } from '../hooks';

// ASSETS
import BackgroundVideo from '../assets/images/home/shanelle-productions-homepage-video.mp4';
import BackgroundVideoMobile from '../assets/images/home/background-home-video-mobile.mp4';
import BackgroundVideoTablet from '../assets/images/home/background-home-video-tablet.mp4';
import HomeHeader from '../assets/images/home/home-header.svg';
import HomeHeaderPhone from '../assets/images/home/home-header-phone.svg';
import HomeHeaderTablet from '../assets/images/home/home-header-tablet.svg';

// COMPONENTS
import { Footer } from '../components/shared';
import { HomeButtons } from '../components/home';

export const Home = (): ReactElement => {
  const {
    screenWidth,
    screenHeight,
    isTablet,
    isPhone,
    isDesktop,
    isPortrait,
  } = useScreenDimensions();

  const getVideo = (): ReactNode => (
    <video
      playsInline
      autoPlay
      muted
      loop
      className="shanelle-home-video rounded-0"
    >
      <source
        src={
          isTablet
            ? BackgroundVideoTablet
            : isPhone
            ? BackgroundVideoMobile
            : BackgroundVideo
        }
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );

  return (
    <main className="animate__animated animate__fadeIn" id="home-section">
      <Image
        alt="Home Header"
        className={`w-${
          isDesktop ? '75' : '100'
        } d-block m-auto shanelle-home-header-image`}
        fluid
        src={
          isPhone ? HomeHeaderPhone : isTablet ? HomeHeaderTablet : HomeHeader
        }
      />
      {getVideo()}
      <HomeButtons />
      {!isPhone && (
        <Container>
          <Footer
            className={`mt-${
              screenWidth > 2000
                ? '8'
                : isTablet && !isPortrait
                ? '7'
                : screenWidth > 1300 && screenHeight > 800
                ? '6'
                : '5'
            } mb-3 animate__animated animate__fadeIn animate__delay-1s`}
          />
        </Container>
      )}
    </main>
  );
};

export default Home;
