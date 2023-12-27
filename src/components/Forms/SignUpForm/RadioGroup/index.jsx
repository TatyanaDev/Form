import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './radioBtn.module.scss';

const RadioButton = (props, ...rest) => {
  const { name, value, heading, description } = props;
  return (
    <div className={styles.container}>
      <label>
        <Field
          type='radio'
          name={name}
          value={value}
          className={styles.margin}
        />
        <h1 className={styles.join}>{heading}</h1>
        <p className={styles.info}>{description}</p>
        <ErrorMessage
          name={name}
          component='span'
          className={styles.error}
          {...rest}
        />
      </label>
    </div>
  );
};

const RadioGroup = props => {
  const { name, values } = props;
  return (
    <label>
      {values.map(input => (
        <RadioButton name={name} {...input} />
      ))}
    </label>
  );
};

export default RadioGroup;
