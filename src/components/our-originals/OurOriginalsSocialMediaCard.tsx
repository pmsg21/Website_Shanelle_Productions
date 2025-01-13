// REACT IMPORTS
import { ReactElement } from "react";
import { Image } from "react-bootstrap";

// INTERFACES
import { SocialMedia } from "../../interfaces/our-originals";

// HOOKS
import { useScreenDimensions, useTranslation } from "../../hooks";

export const OurOriginalsSocialMediaCard = ({
  animationDelay,
  followers,
  icon,
  likesAndViews,
  link,
  title,
}: SocialMedia): ReactElement => {
  const { screenWidth, screenHeight, isDesktop, isPhone } =
    useScreenDimensions();
  const { translate } = useTranslation();

  return (
    <div
      className={`shanelle-container mb-3 w-${
        (screenWidth > 1300 && screenHeight > 800) || isDesktop ? "60" : "75"
      } ${
        isPhone ? "d-block m-auto" : ""
      } animate__animated animate__fadeIn ${animationDelay}`}
    >
      <div className="shanelle-inner-container px-3 py-2">
        <ul className="list-unstyled">
          <li>
            <h4 className="text-uppercase shanelle-extra-bold-text shanelle-social-media-title mb-1">
              <span>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    fluid
                    alt={title}
                    src={icon}
                    className="transition scale me-1"
                  />
                  {title}
                </a>
              </span>
            </h4>
          </li>
          <li>
            <h5 className="shanelle-extra-bold-text ps-2 mb-1">
              {translate(followers)}
            </h5>
          </li>
          <li>
            <h5 className="shanelle-extra-bold-text ps-2 mb-1">
              {translate(likesAndViews)}
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
};
