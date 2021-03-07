import React from 'react';
import cn from 'classnames';
import styles from './input.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Input = ({ name, placeholder, ...rest }) => {
  return (
    <label style={{ position: 'relative' }}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cn(styles.input, {
            [styles.validInput]: meta.touched && !meta.error,
            [styles.errorInput]: meta.touched && meta.error,
            [styles.inputLogin]: window.location.pathname === '/',
            [styles.inputSignup]: window.location.pathname === '/sign-up',
          });
          return (
            <input
              type='text'
              className={classNames}
              placeholder={placeholder}
              {...field}
            />
          );
        }}
      </Field>
      <ErrorMessage
        name={name}
        component='span'
        className={styles.error}
        {...rest}
      />
    </label>
  );
};

export default Input;
