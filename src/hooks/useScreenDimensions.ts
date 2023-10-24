// REACT IMPORTS
import { useEffect, useState } from 'react';

type UseScreenDimensions = {
  /**
   * Verifies that the screen width is greater than 1024px
   */
  isDesktop: boolean;
  /**
   * Verifies that the screen width is less than 768px
   */
  isPhone: boolean;
  /**
   * Verifies if the device is currently in portrait mode
   */
  isPortrait: boolean;
  /**
   * Verifies that the screen width is between 767px and 1025px
   */
  isTablet: boolean;
  /**
   * Current screen height value
   */
  screenHeight: number;
  /**
   * Current screen width value
   */
  screenWidth: number;
  /**
   * Function that scrolls the window to a specified element with a smooth animation.
   * @param  id - The `id` parameter is a string that represents the id of the element that you
   * want to scroll into view.
   */
  scrollIntoView(id: string): void;
};

export function useScreenDimensions(): UseScreenDimensions {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);
  const [isPortrait, setIsPortrait] = useState<boolean>(
    window.innerWidth > window.innerHeight
  );

  useEffect((): (() => void) => {
    const handler = (event: any) => {
      setScreenWidth(event.target.innerWidth);
      setScreenHeight(event.target.innerHeight);
      setIsPortrait(event.target.innerWidth > event.target.innerHeight);
    };

    window.addEventListener('resize', handler);

    return (): void => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  function scrollIntoView(id: string): void {
    const scrollDiv = document.getElementById(id)?.offsetTop;
    window.scrollTo({
      top: scrollDiv ? scrollDiv - 100 : 0,
      behavior: 'smooth',
    });
  }

  const isDesktop = screenWidth > 1024;
  const isPhone = screenWidth < 768;
  const isTablet = screenWidth > 767 && screenWidth < 1025;

  return {
    isDesktop,
    isPhone,
    isPortrait,
    isTablet,
    screenHeight,
    screenWidth,
    scrollIntoView,
  };
}
