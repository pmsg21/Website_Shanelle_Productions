import { MutableRefObject, useEffect, useRef } from 'react';
import { useDetectScrollTop } from '../../hooks/useDetectScrollTop';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import ProjectsVideo from '../../assets/images/projects/shanelle-productions-logo-reveal-landscape.mp4';

export const Video = () => {
  const { screenWidth } = useScreenDimensions();
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const isTopOfElement = useDetectScrollTop(videoRef);

  useEffect(() => {
    if (screenWidth < 768) {
      isTopOfElement ? videoRef.current?.play() : videoRef.current?.load();
    }
  }, [isTopOfElement]);

  return (
    <video
      autoPlay={screenWidth > 767}
      className={`${
        screenWidth < 768 ? 'w-100 mt-3 mb-4' : 'mb-7'
      } d-block m-auto animate__animated animate__fadeIn transition scale`}
      loop
      muted
      ref={videoRef}
    >
      <source src={ProjectsVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
