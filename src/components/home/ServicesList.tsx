import { services } from '../../data/home';
import { ServicesListProps } from '../../interfaces/components';
import { ServicesListItem } from './ServicesListItem';

export const ServicesList = ({ leftSide, className }: ServicesListProps) => {
  return (
    <ul className={`shanelle-services ${className ? className : ''}`}>
      {services
        .filter((service) => service.leftSide === leftSide)
        .map((service) => (
          <ServicesListItem key={service.id} {...service} />
        ))}
    </ul>
  );
};
