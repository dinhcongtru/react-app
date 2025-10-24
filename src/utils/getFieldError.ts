import { validEmail, validName, validTel } from './validateForm';

export const getFieldError = (name: string, value: string) => {
  if (!value.trim()) {
    return `${name} is required`;
  }

  switch (name) {
    case 'lastName':
      return validName(value) ? '' : 'Invalid last name';
    case 'firstName':
      return validName(value) ? '' : 'Invalid first name';
    case 'email':
      return validEmail(value) ? '' : 'Invalid email format';
    case 'phone':
      return validTel(value) ? '' : 'Invalid phone number';
    case 'message':
      return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
    default:
      return '';
  }
};
