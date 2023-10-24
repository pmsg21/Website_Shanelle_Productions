// REACT IMPORTS
import { ReactElement } from 'react';

// DATA
import { services } from '../../data/home';

// INTERFACES
import { ServicesListProps } from '../../interfaces/components';

// COMPONENTS
import { ServicesListItem } from './ServicesListItem';

export const ServicesList = ({
  leftSide,
  className,
}: ServicesListProps): ReactElement => {
  return (
    <ul className={`shanelle-services ${className ? className : ''}`}>
      {services
        .filter((service): boolean => service.leftSide === leftSide)
        .map(
          (service): ReactElement => (
            <ServicesListItem key={service.id} {...service} />
          )
        )}
    </ul>
  );
};
