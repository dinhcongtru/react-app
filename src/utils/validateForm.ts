const validTel = (tel: string) => {
  // Allow phone numbers with or without country code, with spaces, dashes, or parentheses
  const cleanTel = tel.replace(/[\s\-()]/g, '');
  return /^(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/.test(cleanTel);
};

const validEmail = (email: string) => {
  // More comprehensive email validation
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
};

const validName = (name: string) => {
  // Allow names with spaces, hyphens, and apostrophes (for names like "O'Connor" or "Mary-Jane")
  return /^[a-zA-Z\s\-']+$/.test(name) && name.trim().length >= 2;
};

export { validTel, validEmail, validName };
