import style from "./button.module.scss";

const Button = ({ nome }) => {
  return <button className={style.classOfButtton}>{nome}</button>;
};

export default Button;
