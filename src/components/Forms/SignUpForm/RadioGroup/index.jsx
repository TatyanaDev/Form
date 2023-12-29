import { Field, ErrorMessage } from "formik";
import style from "./radioBtn.module.scss";

const RadioButton = ({ value, heading, description }) => (
  <div className={style.container}>
    <label>
      <Field type="radio" name="role" value={value} />

      <ErrorMessage name="role" component="span" className={style.error} />
    </label>

    <span className={style.roleContainer}>
      <h3 className={style.heading}>{heading}</h3>
      <p className={style.description}>{description}</p>
    </span>
  </div>
);

const RadioGroup = () => {
  const values = [
    {
      value: "buyer",
      heading: "Join as a Buyer",
      description:
        "I am looking for a Name, Logo or Tagline for my business, brand or product.",
    },
    {
      value: "creative",
      heading: "Join as a Creative or Marketplace Seller",
      description:
        "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.",
    },
  ];

  return (
    <>
      {values.map((input) => (
        <RadioButton key={input.value} {...input} />
      ))}
    </>
  );
};

export default RadioGroup;
