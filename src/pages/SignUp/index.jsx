import SignUpForm from "components/Forms/SignUpForm";
import Header from "components/Header";
import style from "./signUp.module.scss";

const SignUp = () => (
  <div className={style.container}>
    <Header />
    <h2 className={style.heading}>Create an account</h2>
    <p className={style.content}>
      We always keep your name and email address private.
    </p>
    <SignUpForm />
  </div>
);

export default SignUp;
