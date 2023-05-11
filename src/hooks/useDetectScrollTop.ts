// REACT IMPORTS
import { MutableRefObject, useEffect, useState } from 'react';

export const useDetectScrollTop = (
  ref: MutableRefObject<HTMLDivElement>
): boolean => {
  const [isTopOfElement, setIsTopOfElement] = useState(false);

  const trackScrolling = (): void => {
    setIsTopOfElement(
      window.scrollY + window.innerHeight >= ref.current?.offsetTop
    );
  };

  useEffect((): (() => void) => {
    document.addEventListener('scroll', trackScrolling);

    return (): void => {
      document.removeEventListener('scroll', trackScrolling);
    };
  }, []);

  return isTopOfElement;
};
