import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { SIGN_IN_SCHEMA } from 'utils/validationSchemas';
import styles from './signInForm.module.scss';
import Input from 'components/Forms/Input';
import { INITIAL_VALUES_SIGN_IN } from 'configs';

const SignInForm = props => {
  return (
    <Formik
      initialValues={INITIAL_VALUES_SIGN_IN}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      <Form>
        <Input
          name='email'
          placeholder='Email address'
          inputClass={styles.inputLogin}
        />
        <Input
          name='password'
          type='password'
          placeholder='Password'
          inputClass={styles.inputLogin}
        />
        <Field
          name='submit'
          type='submit'
          value='LOGIN'
          className={styles.login}
        />
      </Form>
    </Formik>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
