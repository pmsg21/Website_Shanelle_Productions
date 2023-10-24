// REACT IMPORTS
import { ReactElement } from 'react';
import { Card } from 'react-bootstrap';

// THIRD PARTY IMPORTS
import Swal from 'sweetalert2';

// INTERFACES
import { Press } from '../../interfaces/press';

// HOOKS
import { useLanguage, useTranslation } from '../../hooks';

export const PressCard = ({
  alt,
  className,
  hasModal = false,
  image,
  text,
  url,
  urls,
}: Press): ReactElement => {
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();
  const readHereText =
    siteLanguage === 'en' ? 'Read full article here' : 'Lee el Artículo Aquí';
  const readAtText =
    siteLanguage === 'en' ? 'Read this article at' : 'Lee este artículo en';

  function handleClick(): void {
    Swal.fire({
      showCloseButton: true,
      showConfirmButton: false,
      html: `
      <div class="shanelle-modal">
        <p>${readAtText}:</p>
        <ul class="list-unstyled">
          ${
            urls
              ? urls
                  .map(
                    ({ id, title, url }): string =>
                      `
                    <li class="mb-${
                      id === urls[urls.length - 1].id ? '0' : '4'
                    }" key="${id}">
                      <a href="${url}" class="transition scale" target="_blank">
                        ${title}
                      </a>
                    </li>
                    `
                  )
                  .join('')
              : null
          }
        </ul>
      </div>
      `,
      customClass: {
        container: 'shanelle-modal',
      },
    });
  }

  return (
    <Card className={`shanelle-card ${className}`}>
      <Card.Img variant="top" src={image} alt={alt} />
      <Card.Body>
        <Card.Text>{translate(text)}</Card.Text>
        {!hasModal ? (
          <Card.Link href={url} target="_blank" className="link">
            {readHereText}
          </Card.Link>
        ) : (
          <Card.Link as="span" className="link" onClick={handleClick}>
            {readHereText}
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};
