// REACT IMPORTS
import { ReactElement } from 'react';

// HOOKS
import { useScreenDimensions } from '../../hooks';

// ASSETS
import ProjectsVideo from '../../assets/images/projects/shanelle-productions-logo-reveal-landscape.mp4';
import ProjectsVideoPoster from '../../assets/images/projects/shanelle-productions-logo-reveal-landscape-poster.png';

export const Video = (): ReactElement => {
  const { screenWidth } = useScreenDimensions();

  return (
    <video
      controls
      className={`${
        screenWidth < 768 ? 'w-100 mt-3 mb-4' : 'mb-7'
      } d-block m-auto animate__animated animate__fadeIn transition scale`}
      poster={ProjectsVideoPoster}
    >
      <source src={ProjectsVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
