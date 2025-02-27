export const heightValidation = height => {
  const valid = /\b(1\d\d|2[0-4]\d|250)\b/.test(height);

  return valid;
};

export const ageValidation = age => {
  const valid = /\b([1-9][0-9]|10)\b/.test(age);

  return valid;
};

export const weightValidation = weight => {
  const valid = /\b([5-9][0-9]|1[0-4][0-9]|150)\b/.test(weight);

  return valid;
};

export const emailValidation = email => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return valid;
};

export const passValidation = pass => {
  const valid = /^.{8,}$/.test(pass);

  return valid;
};

export const nameValidation = name => {
  const valid = /^(?=.*[A-Za-z])[A-Za-z\s-]+$/.test(name);

  return valid;
};

export const createdPassValidation = pass => {
  const valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pass);

  return valid;
};

export const prodNameValidation = product => {
  const valid = /^(?=.*[A-Za-z])[A-Za-z ]+$/.test(product);

  return valid;
};

export const quantityValidation = quantity => {
  const valid = /^\d+$/.test(quantity);

  return valid;
};
