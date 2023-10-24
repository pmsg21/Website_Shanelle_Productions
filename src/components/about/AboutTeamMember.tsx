// REACT IMPORTS
import { ReactElement } from 'react';
import { Image } from 'react-bootstrap';

// HOOKS
import { useScreenDimensions } from '../../hooks';

// COMPONENTS
import { AboutTeamMemberProps } from '../../interfaces/about';
import { AnimatedHeading } from '../shared';

export const AboutTeamMember = ({
  pic,
  name,
  role,
}: AboutTeamMemberProps): ReactElement => {
  const { isPhone } = useScreenDimensions();

  return (
    <div>
      <Image
        alt={name}
        className={`scale transition d-block m-auto ${isPhone ? 'w-60' : ''}`}
        fluid
        src={pic}
      />
      <AnimatedHeading className="text-center mt-3" Heading="h2" text={name} />
      <p className="text-center">{role}</p>
    </div>
  );
};
