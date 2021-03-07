import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cn from 'classnames';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchemas';
import styles from './signInForm.module.scss';
import Input from '../../forms/Input';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = props => {
  return (
    <Formik
      initialValues={initialValues}
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
