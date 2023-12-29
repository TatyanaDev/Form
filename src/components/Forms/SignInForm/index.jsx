import { Formik, Form, Field } from "formik";
import { SIGN_IN_SCHEMA } from "utils/validation-schemes";
import { INITIAL_VALUES_SIGN_IN } from "configs";
import Input from "components/Forms/Input";
import style from "./signInForm.module.scss";

const SignInForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES_SIGN_IN}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={onSubmit}
    >
      <Form>
        <Input
          name="email"
          placeholder="Email address"
          inputClass={style.signInInput}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          inputClass={style.signInInput}
          autoComplete="true"
        />
        <Field
          name="submit"
          type="submit"
          value="Login"
          className={style.signInBtn}
        />
      </Form>
    </Formik>
  );
};

export default SignInForm;
