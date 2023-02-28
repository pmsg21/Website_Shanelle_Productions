import { Card } from 'react-bootstrap';
import { Press } from '../../interfaces/press';
import { useLanguage } from '../../hooks/useLanguage';

export const PressCard = ({ image, alt, text, url, className }: Press) => {
  const { siteLanguage } = useLanguage();

  return (
    <Card className={`shanelle-card ${className}`}>
      <Card.Img variant="top" src={image} alt={alt} />
      <Card.Body>
        <Card.Text>{text[siteLanguage as keyof typeof text]}</Card.Text>
        <Card.Link href={url} target="_blank" className="link">
          {siteLanguage === 'en'
            ? 'Read full article here'
            : 'Lee el Artículo Aquí'}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
