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
