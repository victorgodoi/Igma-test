import styles from "./header.module.scss";
import LogoHeader from "../../Images/LogoHeader.svg";
import CircularButton from "../CircularButton";

const header = () => {
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
    </header>
  );
};

export default header;
