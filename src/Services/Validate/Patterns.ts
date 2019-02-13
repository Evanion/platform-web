/* tslint:disable:max-line-length */

const PATTERNS = {
  EMAIL: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  PHONE: /^\+?(?:[0-9] ?){6,14}[0-9]$/,
  SSN: /^[0-9A-Y\-\+]{11,14}$/,
};

export default PATTERNS;
