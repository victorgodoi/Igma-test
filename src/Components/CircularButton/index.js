import style from "./circularButton.module.scss";
import Icon from "../../Images/iconUser.svg";

const circularButton = () => {
  return (
    <button className={style.styleButton}>
      <img src={Icon} width="24px" height="24px" alt="Avatar" title="Avatar" />
    </button>
  );
};

export default circularButton;
