// REACT IMPORTS
import { ReactElement, useEffect, useState } from 'react';

// DATA
import { catchphrases } from '../../data/home';

// INTERFACES
import { Catchphrase as CatchphraseInterface } from '../../interfaces/home';

// HOOKS
import { useTranslation } from '../../hooks';

export const Catchphrase = ({
  className,
}: {
  className: string;
}): ReactElement => {
  const [catchphrase, setCatchphrase] = useState<CatchphraseInterface>(
    catchphrases[0]
  );
  const { translate } = useTranslation();

  useEffect((): void => {
    setTimeout((): void => {
      if (catchphrase.id !== catchphrases[catchphrases.length - 1].id)
        setCatchphrase(catchphrases[catchphrase.id]);
      else setCatchphrase(catchphrases[0]);
    }, 8000);
  }, [catchphrase]);

  return (
    <p
      className={`shanelle-catchphrase shanelle-semi-bold-text animate__animated animate__fadeIn ${
        className ? className : ''
      }`}
    >
      {translate(catchphrase.text)}
    </p>
  );
};
