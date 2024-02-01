import style from "./imputText.module.scss";

const imputText = ({ nome }) => {
  return <input placeholder={nome} className={style.classInput} />;
};

export default imputText;
