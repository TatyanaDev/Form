import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas';
import styles from './signUpForm.module.scss';
import Input from 'components/Forms/Input';
import RadioGroup from './RadioGroup';
import { INITIAL_VALUES_SIGN_UP } from 'configs/index';

const SignUpForm = props => {
  return (
    <Formik
      initialValues={INITIAL_VALUES_SIGN_UP}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={props.onSubmit}
    >
      <Form className={styles.container}>
        <Input
          name='firstName'
          placeholder='First Name'
          inputClass={styles.inputSignup}
        />
        <Input
          name='lastName'
          placeholder='Last Name'
          inputClass={styles.inputSignup}
        />
        <Input
          name='displayName'
          placeholder='Display Name'
          inputClass={styles.inputSignup}
        />
        <Input
          name='email'
          placeholder='Email Address'
          inputClass={styles.inputSignup}
        />
        <Input
          name='password'
          type='password'
          placeholder='Password'
          inputClass={styles.inputSignup}
        />
        <Input
          name='passwordConfirmation'
          type='password'
          placeholder='Password Confirmation'
          inputClass={styles.inputSignup}
        />
        <RadioGroup
          name='role'
          values={[
            {
              value: 'buyer',
              heading: 'Join As a Buyer',
              description:
                'I am looking for a Name, Logo or Tagline for my business, brand or product.',
            },
            {
              value: 'creative',
              heading: 'Join As a Creative or Marketplace Seller',
              description:
                'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
            },
          ]}
        />
        <Field
          name='submit'
          type='submit'
          value='Create account'
          className={styles.createAccount}
        />
      </Form>
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
