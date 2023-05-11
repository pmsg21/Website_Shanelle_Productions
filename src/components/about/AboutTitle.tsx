// REACT IMPORTS
import { useState } from 'react';

// INTERFACES
import { AboutTitleProps } from '../../interfaces/components';

export const AboutTitle = ({
  title,
  classes,
}: AboutTitleProps): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <h1
      onMouseOver={(): void => setIsHovering(true)}
      onMouseOut={(): void => setIsHovering(false)}
      className={`${
        isHovering ? 'animate__animated animate__headShake' : ''
      } shanelle-extra-bold-text text-uppercase ${classes}`}
    >
      {title}
    </h1>
  );
};
