import { useEffect, useState } from 'react';
import { catchphrases } from '../../data/home';
import { Catchphrase as CatchphraseInterface } from '../../interfaces/home';

export const Catchphrase = ({ classes }: { classes: string }) => {
  const [catchphrase, setCatchphrase] = useState<CatchphraseInterface>(
    catchphrases[0]
  );

  useEffect(() => {
    setTimeout((): void => {
      if (catchphrase.id !== catchphrases[catchphrases.length - 1].id)
        setCatchphrase(catchphrases[catchphrase.id]);
      else setCatchphrase(catchphrases[0]);
    }, 8000);
  }, [catchphrase]);

  return (
    <p
      className={`shanelle-catchphrase animate__animated animate__fadeIn ${classes}`}
    >
      {catchphrase.text}
    </p>
  );
};
