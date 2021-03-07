import React from 'react';
import { Formik, Form, Field } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchemas';
import styles from './signInForm.module.scss';
import Input from '../../forms/Input';
import { INITIAL_VALUES_SIGN_IN } from '../../../configs/index';

const SignInForm = props => {
  return (
    <Formik
      initialValues={INITIAL_VALUES_SIGN_IN}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        return (
          <Form>
            <Input name='email' placeholder='Email address' />
            <Input name='password' type='password' placeholder='Password' />
            <Field
              name='submit'
              type='submit'
              value='LOGIN'
              className={styles.login}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
