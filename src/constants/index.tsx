const MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  NOT_VALID: 'Password is not valid'
};

const REGEX = {
  upperRegex: '(?=.*[A-Z])',
  lowerRegex: '(?=.*[a-z])',
  digitRegex: '.*\\d+.*',
  specialRegex: '(?=.*[@#$%^&+=])',
  lengthRegex: '(?=.{8,})'
};

const ROUTES = {
  ROOT: '/',
  DASHBOARD: '/dashboard'
};

export { REGEX, MESSAGES, ROUTES };
