const hasLowerCase = (str: string) => {
  return /[a-z]/.test(str);
};
const hasUpperCase = (str: string) => {
  return /[A-Z]/.test(str);
};
const hasDigit = (str: string) => {
  return /[0-9]/.test(str);
};
const hasSpecialCharacter = (str: string) => {
  // eslint-disable-next-line
  return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g.test(str);
};
const isValidPassword = (expression: string) => {
  const regex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
  return regex.test(expression);
};

export { hasDigit, hasUpperCase, hasLowerCase, isValidPassword, hasSpecialCharacter };
