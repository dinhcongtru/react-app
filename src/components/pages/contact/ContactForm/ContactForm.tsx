import React, { useCallback, useEffect, useState } from 'react';
import InputText from '@components/common/Inputs/InputText/InputText';
import TextArea from '@components/common/Inputs/TextArea/TextArea';
import Image from '@components/common/Images/Image';
import { images } from '@/utils/images';
import Button from '@components/common/Buttons/Button';
import { validEmail, validName, validTel } from '@utils/validateForm';
import { useDebounce } from '@hooks/useDebounce';
import './ContactForm.scss';

interface ContactFormProps {
  action: string;
}

interface ContactForm {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormErrors {
  lastName: string | null;
  firstName: string | null;
  email: string | null;
  phone: string | null;
  message: string | null;
}

const initialForm = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = ({ action }: ContactFormProps) => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>(initialForm);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasErrors = validateAllFields();
    if (hasErrors) return;
    sessionStorage.setItem('contact-form', JSON.stringify(form));
  };

  const validateAllFields = () => {
    let hasErrors = false;
    const newErrors = { ...errors };

    // Validate each field
    Object.entries(form).forEach(([name, value]) => {
      const errorMessage = getFieldError(name, value);
      if (errorMessage) {
        newErrors[name as keyof ContactFormErrors] = errorMessage;
        hasErrors = true;
      } else {
        newErrors[name as keyof ContactFormErrors] = '';
      }
    });

    setErrors(newErrors);
    return hasErrors;
  };

  const getFieldError = (name: string, value: string) => {
    if (!value.trim()) {
      return `${name} is required`;
    }

    switch (name) {
      case 'lastName':
      case 'firstName':
        return !validName(value) ? `Invalid ${name}` : '';
      case 'email':
        return !validEmail(value) ? 'Invalid email format' : '';
      case 'phone':
        return !validTel(value) ? 'Invalid phone number' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const validateField = useCallback((name: string, value: string) => {
    const errorMessage = getFieldError(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMessage }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Validate immediately on blur
    validateField(name, value);
  };

  // Debounced validation function
  const debouncedValidate = useDebounce((name: string, value: string) => {
    validateField(name, value);
  }, 300);

  // Validate field when form data changes
  useEffect(() => {
    Object.entries(form).forEach(([name, value]) => {
      if (value.trim()) {
        debouncedValidate(name, value);
      }
    });
  }, [form, debouncedValidate]);

  return (
    <form className="contact-form" method="post" action={action} onSubmit={handleSubmit}>
      <div className="wrp-form">
        <div className="form-content">
          <div className="form-heading">
            <h3 className="form-heading-title">Let’s connect constellations</h3>
            <p className="form-heading-description">
              Let's align our constellations! Reach out and let the magic of collaboration
              illuminate our skies.
            </p>
          </div>
          <div className="form-body">
            <div className="form-group">
              <InputText
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {errors.lastName && <span className="form-group-error">{errors.lastName}</span>}
            </div>
            <div className="form-group">
              <InputText
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {errors.firstName && <span className="form-group-error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <InputText
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {errors.email && <span className="form-group-error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <InputText
                id="phone"
                name="phone"
                placeholder="Phone Number"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {errors.phone && <span className="form-group-error">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <TextArea
                id="message"
                name="message"
                placeholder="Message"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {errors.message && <span className="form-group-error">{errors.message}</span>}
            </div>
          </div>
          <div className="form-footer">
            <Button type="submit" icon={true}>
              Send Message
            </Button>
          </div>
        </div>
        <div className="form-picture">
          <Image src={images['pct-contact-form.png']} alt="Contact" />
          <div className="form-picture-content">
            <p className="form-picture-content-quote">
              “Two lunar months revealed Earth's fragile beauty against vast silence, transforming
              my view of our place in the universe.
            </p>
            <span className="form-picture-content-author">Irinel Traista</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
