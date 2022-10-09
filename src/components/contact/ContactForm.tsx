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
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import LogoGray from '../../assets/images/shared/logo-gray.svg';
import { useState, useEffect } from 'react';

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
  const [submitText, setSubmitText] = useState<string>('Submit');
  const { name, email, message, isSending, isSuccessful, hasError } = values;
  const { screenWidth, isPortrait } = useScreenDimensions();
  const isTabletPortrait =
    screenWidth > 767 && screenWidth < 1025 && isPortrait;
  const isSmallScreen =
    isTabletPortrait || (screenWidth > 1024 && screenWidth < 1301);

  const getFeedbackMessage = () => {
    if (isSmallScreen) {
      return (
        <ToastContainer className="p-3" position="bottom-end">
          <Toast delay={4000} autohide bg={isSuccessful ? 'success' : 'danger'}>
            <Toast.Body>
              {' '}
              {isSuccessful
                ? 'The email has been sent successfully. Thanks for contacting us.'
                : 'An error has occurred sending the email, please try again.'}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      );
    }

    return (
      <Alert variant={isSuccessful ? 'success' : 'danger'}>
        {isSuccessful
          ? 'The email has been sent successfully. Thanks for contacting us.'
          : 'An error has occurred sending the email, please try again.'}
      </Alert>
    );
  };

  useEffect(() => {
    setSubmitText(isSending ? 'Submitting' : 'Submit');
  }, [isSending]);

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
          placeholder="Your Name"
          required
          type="text"
          value={name}
        />
        <Form.Control.Feedback type="invalid" tooltip={isSmallScreen}>
          Please enter your name.
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
          placeholder="Your Email"
          required
          type="email"
          value={email}
        />
        <Form.Control.Feedback type="invalid" tooltip={isSmallScreen}>
          Please enter a valid email.
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
          placeholder="Message"
          required
          rows={6}
          value={message}
        />
        <Form.Control.Feedback type="invalid" tooltip={isSmallScreen}>
          Please enter your message.
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
            Thank you for <br />
            supporting our work!
          </h2>
        </div>
      )}
    </Form>
  );
};
