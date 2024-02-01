import style from "./newSletter.module.scss";
import Button from "../Button";
import Input from "../InputText";

const newSletter = () => {
  return (
    <div id={style.divNewSletter}>
      <div>
        <p></p>
        <p></p>
        <Input nome="Nome" />
        <Input nome="Email" />
        <Button />
      </div>
      <div></div>
    </div>
  );
};

export default newSletter;
