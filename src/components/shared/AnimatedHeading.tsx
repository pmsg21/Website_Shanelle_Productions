// REACT IMPORTS
import { ReactElement, useState } from 'react';

type AnimatedHeadingProps = {
  className?: string;
  Heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
};

export const AnimatedHeading = ({
  className = '',
  Heading,
  text,
}: AnimatedHeadingProps): ReactElement => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Heading
      onMouseOver={(): void => setIsHovering(true)}
      onMouseOut={(): void => setIsHovering(false)}
      className={`${
        isHovering ? 'animate__animated animate__headShake' : ''
      } shanelle-extra-bold-text text-uppercase ${className}`}
    >
      {text}
    </Heading>
  );
};
