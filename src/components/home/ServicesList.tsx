// DATA
import { services } from '../../data/home';

// INTERFACES
import { ServicesListProps } from '../../interfaces/components';

// COMPONENTS
import { ServicesListItem } from './ServicesListItem';

export const ServicesList = ({
  leftSide,
  className,
}: ServicesListProps): JSX.Element => {
  return (
    <ul className={`shanelle-services ${className ? className : ''}`}>
      {services
        .filter((service): boolean => service.leftSide === leftSide)
        .map(
          (service): JSX.Element => (
            <ServicesListItem key={service.id} {...service} />
          )
        )}
    </ul>
  );
};
