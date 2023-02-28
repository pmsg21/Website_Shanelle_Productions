import { useEffect, useState } from 'react';
import { catchphrases } from '../../data/home';
import { Catchphrase as CatchphraseInterface } from '../../interfaces/home';
import { useLanguage } from '../../hooks/useLanguage';

export const Catchphrase = ({ classes }: { classes: string }) => {
  const [catchphrase, setCatchphrase] = useState<CatchphraseInterface>(
    catchphrases[0]
  );
  const { siteLanguage } = useLanguage();

  useEffect(() => {
    setTimeout((): void => {
      if (catchphrase.id !== catchphrases[catchphrases.length - 1].id)
        setCatchphrase(catchphrases[catchphrase.id]);
      else setCatchphrase(catchphrases[0]);
    }, 8000);
  }, [catchphrase]);

  return (
    <p
      className={`shanelle-catchphrase shanelle-semi-bold-text animate__animated animate__fadeIn ${classes}`}
    >
      {catchphrase.text[siteLanguage as keyof typeof catchphrase.text]}
    </p>
  );
};
