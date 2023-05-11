// REACT IMPORTS
import { Image } from 'react-bootstrap';

// ASSETS
import LogoWhite from '../../assets/images/shared/logo-white.svg';

export const Loader = (): JSX.Element => {
  return (
    <Image
      src={LogoWhite}
      className="animate__animated animate__pulse animate__infinite shanelle-loader"
      alt="Shanelle Productions Logo White"
    />
  );
};
