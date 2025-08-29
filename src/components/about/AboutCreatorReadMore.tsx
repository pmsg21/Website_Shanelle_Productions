import { useState, type ReactElement } from "react";
import Markdown from "react-markdown";

// INTERFACES
import { AboutCreatorReadMoreProps } from "../../interfaces/about";

// HOOKS
import { useLanguage, useScreenDimensions } from "../../hooks";

export const AboutCreatorReadMore = ({
  text,
}: AboutCreatorReadMoreProps): ReactElement => {
  const { siteLanguage } = useLanguage();
  const { isPhone, isTablet } = useScreenDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const readMoreText = siteLanguage === "en" ? "Read More" : "Leer Más";
  const readLessText = siteLanguage === "en" ? "Read Less" : "Leer Menos";

  return (
    <div className="d-flex flex-column gap-2">
      <div
        className={`shanelle-creator-read-more-content-container 
          ${
            isOpen
              ? "shanelle-creator-read-more-content-container--open"
              : "shanelle-creator-read-more-content-container--closed"
          }`}
      >
        <Markdown>{text}</Markdown>
      </div>
      <button
        className={`w-fit align-self-end shanelle-creator-read-more-button transition ${
          isPhone || isTablet ? "mb-4" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? readLessText : readMoreText}
      </button>
    </div>
  );
};
