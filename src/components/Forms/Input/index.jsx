import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./input.module.scss";

const Input = ({ name, placeholder, inputClass, type, ...rest }) => {
  const error = cn(style.error, {
    [style.errorSignIn]: window.location.pathname === "/",
    [style.errorSignUp]: window.location.pathname === "/sign-up",
  });

  return (
    <label className={style.labelInput}>
      <Field name={name}>
        {({ field, meta }) => {
          const classNames = cn(style.input, inputClass, {
            [style.validInput]: meta.touched && !meta.error,
            [style.invalidInput]: meta.touched && meta.error,
          });

          return (
            <input
              type={type ? type : "text"}
              className={classNames}
              placeholder={placeholder}
              {...field}
              {...rest}
            />
          );
        }}
      </Field>

      <ErrorMessage name={name} component="span" className={error} {...rest} />
    </label>
  );
};

Input.defaultProps = {
  name: "name",
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
