import SignInForm from "components/Forms/SignInForm";
import Header from "components/Header";
import style from "./signIn.module.scss";

const SignIn = () => (
  <div className={style.container}>
    <Header />
    <h1 className={style.heading}>Login to your account</h1>
    <SignInForm />
  </div>
);

export default SignIn;
