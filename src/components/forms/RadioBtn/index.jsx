import React from 'react';
import { Field } from 'formik';
import styles from './radioBtn.module.scss';

const RadioBtn = props => {
  return (
    <div role='group' aria-labelledby='my-radio-group'>
      <div className={styles.container}>
        <label>
          <Field
            type='radio'
            name='picked'
            value='Join As a Buyer'
            className={styles.margin}
          />
          <h1 className={styles.join}>Join As a Buyer</h1>
          <p className={styles.info}>
            I am looking for a Name, Logo or Tagline for my business, brand or
            product.
          </p>
        </label>
      </div>
      <div className={styles.container}>
        <label>
          <Field
            type='radio'
            name='picked'
            value='Join As a Creative or Marketplace Seller'
            className={styles.margin}
          />
          <h1 className={styles.join}>
            Join As a Creative or Marketplace Seller
          </h1>
          <p className={styles.info}>
            I plan to submit name ideas, Logo designs or sell names in Domain
            Marketplace.
          </p>
        </label>
      </div>
    </div>
  );
};

export default RadioBtn;
