import style from "./button.module.scss";

const button = ({ nome }) => {
  return <button className={style.classOfButtton}>{nome}</button>;
};

export default button;
