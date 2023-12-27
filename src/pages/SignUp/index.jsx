import React from 'react';
import styles from './signUp.module.scss';
import Header from 'components/Header';
import SignUpForm from 'components/Forms/SignUpForm';

const SignUpPage = props => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.heading}>CREATE AN ACCOUNT</h1>
      <p className={styles.content}>
        We always keep your name and email adress private.
      </p>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpPage;
