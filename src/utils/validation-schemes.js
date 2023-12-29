import * as Yup from "yup";

export const FIRST_SCHEMA = Yup.string()
  .matches(
    /^[A-Z][a-z]{1,64}$/,
    "Please enter a valid name. The first letter must be capitalized"
  )
  .label("First name")
  .required();

export const LAST_SCHEMA = Yup.string()
  .matches(
    /^[A-Z][a-z]{1,64}$/,
    "Please enter a valid last name. The first letter must be capitalized"
  )
  .label("Last name")
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email(
    'Enter a valid email. Must start with a lowercase letter, contain @ and "."'
  )
  .label("Email address")
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: Yup.string()
    .matches(
      /^.{8,}$/,
      "Please enter a valid password. Must be at least 8 characters long"
    )
    .label("Password")
    .required(),
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: FIRST_SCHEMA,
  lastName: LAST_SCHEMA,
  displayName: Yup.string()
    .matches(
      /^[A-Z][a-z]{1,64}$/,
      "Enter a name to display on the site. The first letter must be capitalized"
    )
    .label("Display name")
    .required(),
  email: EMAIL_SCHEMA,
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Please enter a valid password. Must contain an uppercase letter, a small letter, a special character and at least 8 characters"
    )
    .label("Password")
    .required(),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .label("Password confirmation")
    .required(),
  role: Yup.string()
    .oneOf(["buyer", "creative"])
    .label("One of the roles")
    .required(),
});
