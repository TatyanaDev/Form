import React from 'react';
import styles from './signIn.module.scss';
import Header from '../../components/forms/Header';
import SignInForm from '../../components/forms/SignInForm';

const SignInPage = props => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.heading}>LOGIN TO YOUR ACCOUNT</h1>
      <SignInForm onSubmit={onSubmit} className={styles.error} />
    </div>
  );
};

export default SignInPage;
