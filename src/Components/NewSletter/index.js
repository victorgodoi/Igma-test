import style from "./newSletter.module.scss";
import Button from "../Button";
import Input from "../InputText";
import Celular1 from "../../Images/celular1@3x.png";
import Celular2 from "../../Images/celular2@3x.png";
import Celular3 from "../../Images/celular3@3x.png";
import Celular4 from "../../Images/celular4@3x.png";
import Celular5 from "../../Images/celular5@3x.png";
import Celular6 from "../../Images/celular6@3x.png";
import Celular7 from "../../Images/celular7@3x.png";
import Celular8 from "../../Images/celular8@3x.png";
import Celular9 from "../../Images/celular9@3x.png";
import Celular10 from "../../Images/celular10@3x.png";
import Celular11 from "../../Images/celular11@3x.png";
import Celular12 from "../../Images/celular12@3x.png";

const newSletter = () => {
  const valorWidth = 193;

  return (
    <div id={style.divNewSletter}>
      <div className={style.Content}>
        <p className={style.title}>Assine nossa newsletter</p>
        <p className={style.subTitle}>
          Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada
          15 dias.
        </p>
        <div className={style.input1}>
          <Input nome="Nome" />
        </div>
        <div className={style.input2}>
          <Input nome="Email" />
        </div>
        <Button>Assinar Newsletter</Button>
      </div>
      <div className={style.listCelular}>
        <ul>
          <li>
            <img
              src={Celular1}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
          <li>
            <img
              src={Celular2}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
          <li>
            <img
              src={Celular3}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={Celular4}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
          <li>
            <img
              src={Celular5}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
          <li>
            <img
              src={Celular6}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={Celular7}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
          <li>
            <img
              src={Celular8}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
          <li>
            <img
              src={Celular9}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={Celular10}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
          <li>
            <img
              src={Celular11}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
          <li>
            <img
              src={Celular12}
              width={valorWidth}
              height="auto"
              alt="imagem celular"
              title="imagem celular"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default newSletter;
