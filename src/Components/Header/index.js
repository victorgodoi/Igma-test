import style from "./header.module.scss";
import LogoHeader from "../../Images/LogoHeader.svg";
import CircularButton from "../CircularButton";
import Container from "../Container";

const Header = () => {
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
      </header>
    </Container>
  );
};

export default Header;
