import * as Yup from 'yup';

export const FIRST_SCHEMA = Yup.string()
  .matches(
    /^[A-Z][a-z]{1,64}$/,
    'Please enter a valid name. The first letter must be capitalized'
  )
  .required();

export const LAST_SCHEMA = Yup.string()
  .matches(
    /^[A-Z][a-z]{1,64}$/,
    'Please enter a valid last name. The first letter must be capitalized'
  )
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email(
    'Enter a valid email. Must start with a lowercase letter, contain @ and "."'
  )
  .required();

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    'Please enter a valid password. Must contain an uppercase letter, a small letter, a special character and at least 8 characters'
  )
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: FIRST_SCHEMA,
  lastName: LAST_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});
