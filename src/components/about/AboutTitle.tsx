import { useState } from 'react';
import { AboutTitleProps } from '../../interfaces/components';

export const AboutTitle = ({ title, classes }: AboutTitleProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <h1
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      className={`${
        isHovering ? 'animate__animated animate__headShake' : ''
      } shanelle-extra-bold-text text-uppercase ${classes}`}
    >
      {title}
    </h1>
  );
};
