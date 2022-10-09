import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import ProjectsVideo from '../../assets/images/projects/shanelle-productions-logo-reveal-landscape.mp4';

export const Video = () => {
  const { screenWidth } = useScreenDimensions();

  return (
    <video
      controls
      className={`${
        screenWidth < 768 ? 'w-100 mt-3 mb-4' : 'mb-7'
      } d-block m-auto animate__animated animate__fadeIn transition scale`}
    >
      <source src={ProjectsVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
