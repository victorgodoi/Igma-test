import style from "./header.module.scss";
import LogoHeader from "../../Images/LogoHeader.svg";
import CircularButton from "../CircularButton";
//import { useState } from "react";
import Container from "../Container";

const Header = () => {
  //const [avtar, atualizarAvatar] = useState();

  return (
    <Container className={style.sticky}>
      <header className={style.header}>
        <img
          className={style.logo}
          src={LogoHeader}
          width="120px"
          height="42"
          alt="Logo da Página"
          title="Logo da Página"
        />
        <CircularButton />
        {/* <CircularButton onClick={atualizarAvatar} /> */}
      </header>
    </Container>
  );
};

export default Header;
