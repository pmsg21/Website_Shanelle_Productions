// REACT IMPORTS
import { ChangeEvent, FormEvent, useState } from 'react';

// THIRD PARTY IMPORTS
import axios from 'axios';

interface ContactForm {
  email: string;
  hasError: boolean;
  message: string;
  name: string;
  isSending: boolean;
  isSuccessful: boolean;
}

interface UseContactFormReturn {
  validated: boolean;
  values: ContactForm;
  handleInputChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const useContactForm = (
  initialState: ContactForm
): UseContactFormReturn => {
  const [values, setValues] = useState<ContactForm>(initialState);
  const [validated, setValidated] = useState(false);

  const reset = (): void => {
    setValues(initialState);
    setValidated(false);
  };

  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [target.id]: target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    setValidated(true);
    if (!form.checkValidity()) {
      event.stopPropagation();
      return;
    }

    setValues({
      ...values,
      isSending: true,
      hasError: false,
      isSuccessful: false,
    });

    const { name, email, message } = values;

    axios({
      url: 'https://formspree.io/f/myyvwpdp',
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
      data: { name, email, message },
    })
      .then(({ status, data }): void => {
        if (status === 200) {
          if (data.ok) {
            setValues({
              ...values,
              isSending: false,
              isSuccessful: true,
            });
            setTimeout(reset, 4000);
          } else handleFormError(data);
        } else handleFormError(`${status}, ${data}`);
      })
      .catch((e) => {
        handleFormError(e);
      });
  };

  const handleFormError = (e: any): void => {
    console.error(e);
    setValues({
      ...values,
      isSending: false,
      hasError: true,
    });

    setTimeout((): void => {
      setValues({
        ...values,
        hasError: false,
      });
    }, 4000);
  };

  return { values, handleInputChange, handleSubmit, validated };
};
