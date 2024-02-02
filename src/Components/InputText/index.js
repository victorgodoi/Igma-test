import style from "./imputText.module.scss";

const ImputText = ({ nome }) => {
  return <input placeholder={nome} className={style.classInput} />;
};

export default ImputText;
