// REACT IMPORTS
import { useEffect, useState } from 'react';

export function useScreenDimensions(): {
  screenWidth: number;
  screenHeight: number;
  isPortrait: boolean;
} {
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

  return { screenWidth, screenHeight, isPortrait };
}
