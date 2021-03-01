import React from 'react';
import styles from './signUp.module.scss';
import Header from '../Header';
import SignUpForm from '../../components/forms/SignUpForm';

const SignUpPage = props => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.heading}>CREATE AN ACCOUNT</h1>
      <p>We always keep your name and email adress private</p>
      <SignUpForm onSubmit={onSubmit} className={styles.error} />
    </div>
  );
};

export default SignUpPage;