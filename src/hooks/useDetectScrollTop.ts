import { MutableRefObject, useEffect, useState } from 'react';

export const useDetectScrollTop = (ref: MutableRefObject<HTMLDivElement>) => {
  const [isTopOfElement, setIsTopOfElement] = useState(false);

  const trackScrolling = () => {
    setIsTopOfElement(
      window.scrollY + window.innerHeight >= ref.current.offsetTop
    );
  };

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);

    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  }, []);

  return isTopOfElement;
};
