import styles from "./header.module.scss";
import LogoHeader from "../../Images/LogoHeader.svg";
import CircularButton from "../CircularButton";
//import { useState } from "react";

const header = () => {
  //const [avtar, atualizarAvatar] = useState();

  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={LogoHeader}
        width="120px"
        height="42"
        alt="Logo da Página"
        title="Logo da Página"
      />
      <CircularButton />
      {/* <CircularButton onClick={atualizarAvatar} /> */}
    </header>
  );
};

export default header;
