import {
  Button,
  Form,
  Row,
  Col,
  Image,
  Alert,
  ToastContainer,
  Toast,
} from 'react-bootstrap';
import { useContactForm } from '../../hooks/useContactForm';
import { useLanguage } from '../../hooks/useLanguage';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useState, useEffect } from 'react';
import LogoGray from '../../assets/images/shared/logo-gray.svg';

export const ContactForm = () => {
  const { values, handleInputChange, handleSubmit, validated } = useContactForm(
    {
      email: '',
      hasError: false,
      message: '',
      name: '',
      isSending: false,
      isSuccessful: false,
    }
  );
  const { siteLanguage } = useLanguage();
  const submitButtonText = siteLanguage === 'en' ? 'Submit' : 'Enviar';
  const submittingButtonText =
    siteLanguage === 'en' ? 'Submitting' : 'Enviando';
  const [submitText, setSubmitText] = useState<string>(submitButtonText);
  const { name, email, message, isSending, isSuccessful, hasError } = values;
  const { screenWidth, screenHeight, isPortrait } = useScreenDimensions();
  const isTabletPortrait =
    screenWidth > 767 && screenWidth < 1025 && isPortrait;
  const isSmallScreen =
    isTabletPortrait ||
    (screenWidth > 1024 && screenWidth < 1301) ||
    (screenWidth > 1300 && screenHeight < 801);
  const successMessage =
    siteLanguage === 'en'
      ? 'The email has been sent successfully. Thanks for contacting us.'
      : 'El email ha sido enviado exitosamente. Gracias por contactarnos.';
  const errorMessage =
    siteLanguage === 'en'
      ? 'An error has occurred sending the email, please try again.'
      : 'Ha ocurrido un error enviando el email, por favor intenta nuevamente.';

  const getFeedbackMessage = () => {
    if (isSmallScreen) {
      return (
        <ToastContainer className="p-3" position="bottom-end">
          <Toast delay={4000} autohide bg={isSuccessful ? 'success' : 'danger'}>
            <Toast.Body>
              {isSuccessful ? successMessage : errorMessage}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      );
    }

    return (
      <Alert variant={isSuccessful ? 'success' : 'danger'}>
        {isSuccessful ? successMessage : errorMessage}
      </Alert>
    );
  };

  useEffect(() => {
    setSubmitText(isSending ? submittingButtonText : submitButtonText);
  }, [isSending]);

  useEffect(() => {
    setSubmitText(submitButtonText);
  }, [siteLanguage]);

  return (
    <Form
      className="position-relative"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group
        className={`mb-4 ${isSmallScreen ? 'position-relative' : ''}`}
        controlId="name"
      >
        <Form.Control
          autoComplete="off"
          className="transition shanelle-semi-bold-text"
          disabled={isSending}
          onChange={handleInputChange}
          placeholder={siteLanguage === 'en' ? 'Your Name' : 'Nombre'}
          required
          type="text"
          value={name}
        />
        <Form.Control.Feedback type="invalid" tooltip={isSmallScreen}>
          {siteLanguage === 'en'
            ? 'Please enter your name'
            : 'Por favor ingresa tu nombre'}
          .
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className={`mb-4 ${isSmallScreen ? 'position-relative' : ''}`}
        controlId="email"
      >
        <Form.Control
          autoComplete="off"
          className="transition shanelle-semi-bold-text"
          disabled={isSending}
          onChange={handleInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder={siteLanguage === 'en' ? 'Your Email' : 'Email'}
          required
          type="email"
          value={email}
        />
        <Form.Control.Feedback type="invalid" tooltip={isSmallScreen}>
          {siteLanguage === 'en'
            ? 'Please enter a valid email'
            : 'Por favor ingresa un email válido'}
          .
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className={`mb-4 ${isSmallScreen ? 'position-relative' : ''}`}
        controlId="message"
      >
        <Form.Control
          as="textarea"
          autoComplete="off"
          className="transition shanelle-semi-bold-text"
          disabled={isSending}
          onChange={handleInputChange}
          placeholder={siteLanguage === 'en' ? 'Message' : 'Mensaje'}
          required
          rows={6}
          value={message}
        />
        <Form.Control.Feedback type="invalid" tooltip={isSmallScreen}>
          {siteLanguage === 'en'
            ? 'Please enter your message'
            : 'Por favor ingresa tu mensaje'}
          .
        </Form.Control.Feedback>
      </Form.Group>
      {(hasError || isSuccessful) && getFeedbackMessage()}
      {screenWidth > 767 ? (
        <Button
          className={`w-${
            isSending && isTabletPortrait ? '50' : '25'
          } float-right transition scale shanelle-bold-text`}
          disabled={isSending}
          type="submit"
        >
          {submitText}
        </Button>
      ) : (
        <div>
          <Row>
            <Col>
              <Image className="mt-0 w-100" alt="Logo Gray" src={LogoGray} />
            </Col>
            <Col>
              <Button
                className="mt-3 w-100 transition scale shanelle-bold-text"
                disabled={isSending}
                type="submit"
              >
                {submitText}
              </Button>
            </Col>
          </Row>
          <h2 className="shanelle-form-thanks shanelle-extra-bold-text">
            {siteLanguage === 'en' ? 'Thank you for' : 'Gracias por'}
            <br />
            {siteLanguage === 'en'
              ? 'supporting our work'
              : 'apoyar nuestro trabajo'}
            !
          </h2>
        </div>
      )}
    </Form>
  );
};
