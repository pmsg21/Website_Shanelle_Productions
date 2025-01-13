// REACT IMPORTS
import { ReactElement, useEffect, useState } from "react";

// DATA
import { catchphrases } from "../../data/home";

// INTERFACES
import { Catchphrase as CatchphraseInterface } from "../../interfaces/home";

// HOOKS
import { useTranslation } from "../../hooks";

export const Catchphrase = ({
  className = "",
}: {
  className?: string;
}): ReactElement => {
  const [catchphraseIndex, setCatchphraseIndex] = useState<number>(0);
  const { translate } = useTranslation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCatchphraseIndex((prevIndex) => (prevIndex + 1) % catchphrases.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p
      className={`shanelle-catchphrase shanelle-semi-bold-text animate__animated animate__fadeIn ${className}`}
    >
      {translate(catchphrases[catchphraseIndex].text)}
    </p>
  );
};
