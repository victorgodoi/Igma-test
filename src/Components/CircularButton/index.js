import style from "./circularButton.module.scss";
import Icon from "../../Images/iconUser.svg";
import Avatar from "../../Images/avatar@3x.png";
import { useState } from "react";

const CircularButton = () => {
  const [logado, atualizarLogado] = useState(false);

  return (
    <button className={style.button} onClick={() => atualizarLogado(!logado)}>
      <img
        className={logado ? style.avatar : style.icon}
        src={logado ? Avatar : Icon}
        alt="Avatar"
        title="Avatar"
      />
    </button>
  );
};

export default CircularButton;
