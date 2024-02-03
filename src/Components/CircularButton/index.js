import style from "./circularButton.module.scss";
import Icon from "../../Images/iconUser.svg";
import Avatar from "../../Images/avatar@3x.png";
import { useState } from "react";

const CircularButton = () => {
  const [avatar, atualizarAvatar] = useState([Icon]);

  return (
    <button
      className={style.styleButton}
      onClick={() => atualizarAvatar([Avatar])}
    >
      <img
        src={avatar}
        width="24px"
        height="24px"
        alt="Avatar"
        title="Avatar"
      />
    </button>
  );
};

export default CircularButton;
