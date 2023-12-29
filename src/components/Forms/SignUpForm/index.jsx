import { Formik, Form, Field } from "formik";
import { SIGN_UP_SCHEMA } from "utils/validation-schemes";
import { INITIAL_VALUES_SIGN_UP } from "configs/index";
import Input from "components/Forms/Input";
import RadioGroup from "./RadioGroup";
import style from "./signUpForm.module.scss";

const SignUpForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES_SIGN_UP}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={onSubmit}
    >
      <Form className={style.formContainer}>
        <Input
          name="firstName"
          placeholder="First name"
          inputClass={style.signUpInput}
        />
        <Input
          name="lastName"
          placeholder="Last name"
          inputClass={style.signUpInput}
        />
        <Input
          name="displayName"
          placeholder="Display name"
          inputClass={style.signUpInput}
        />
        <Input
          name="email"
          placeholder="Email address"
          inputClass={style.signUpInput}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          inputClass={style.signUpInput}
          autoComplete="true"
        />
        <Input
          name="passwordConfirmation"
          type="password"
          placeholder="Password confirmation"
          inputClass={style.signUpInput}
          autoComplete="true"
        />

        <RadioGroup />

        <Field
          name="submit"
          type="submit"
          value="Create account"
          className={style.signUpBtn}
        />
      </Form>
    </Formik>
  );
};

export default SignUpForm;
