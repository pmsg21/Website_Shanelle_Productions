import { Card } from 'react-bootstrap';
import { Press } from '../../interfaces/press';

export const PressCard = ({ image, alt, text, url, className }: Press) => {
  return (
    <Card className={`shanelle-card ${className}`}>
      <Card.Img variant="top" src={image} alt={alt} />
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Card.Link href={url} target="_blank" className="link">
          Read full article here
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
