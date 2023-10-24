// REACT IMPORTS
import { ReactElement } from 'react';
import { Image } from 'react-bootstrap';

// INTERFACES
import { SocialMedia } from '../../interfaces/entertainment';

// HOOKS
import { useScreenDimensions, useTranslation } from '../../hooks';

export const EntertainmentSocialMediaCard = ({
  animationDelay,
  followers,
  icon,
  likesAndViews,
  link,
  title,
}: SocialMedia): ReactElement => {
  const { screenWidth } = useScreenDimensions();
  const { translate } = useTranslation();

  return (
    <div
      className={`shanelle-container mb-3 w-${
        screenWidth > 1024 ? '75' : '80'
      } ${
        screenWidth < 768 ? 'd-block m-auto' : ''
      } animate__animated animate__fadeIn ${animationDelay}`}
    >
      <div className="shanelle-inner-container p-2">
        <ul className="list-unstyled">
          <li>
            <h3 className="text-uppercase shanelle-extra-bold-text shanelle-social-media-title">
              <span>
                <a href={link} target="_blank">
                  <Image
                    fluid
                    alt={title}
                    src={icon}
                    className="transition scale me-1"
                  />
                  {title}
                </a>
              </span>
            </h3>
          </li>
          <li>
            <h4 className="shanelle-extra-bold-text ps-2">
              {translate(followers)}
            </h4>
          </li>
          <li>
            <h4 className="shanelle-extra-bold-text ps-2">
              {translate(likesAndViews)}
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};
