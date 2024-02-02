import style from "./newsletter.module.scss";
import Button from "../Button";
import Input from "../InputText";
//importação das imagens
import Celular01x3 from "../../Images/celular1@3x.png";
import Celular01x2 from "../../Images/celular1@2x.png";
import Celular01 from "../../Images/celular1.png";
import Celular02x3 from "../../Images/celular2@3x.png";
import Celular02x2 from "../../Images/celular2@2x.png";
import Celular02 from "../../Images/celular2.png";
import Celular03x3 from "../../Images/celular3@3x.png";
import Celular03x2 from "../../Images/celular3@2x.png";
import Celular03 from "../../Images/celular3.png";
import Celular04x3 from "../../Images/celular4@3x.png";
import Celular04x2 from "../../Images/celular4@2x.png";
import Celular04 from "../../Images/celular4.png";
import Celular05x3 from "../../Images/celular5@3x.png";
import Celular05x2 from "../../Images/celular5@2x.png";
import Celular05 from "../../Images/celular5.png";
import Celular06x3 from "../../Images/celular6@3x.png";
import Celular06x2 from "../../Images/celular6@2x.png";
import Celular06 from "../../Images/celular6.png";
import Celular07x3 from "../../Images/celular7@3x.png";
import Celular07x2 from "../../Images/celular7@2x.png";
import Celular07 from "../../Images/celular7.png";
import Celular08x3 from "../../Images/celular8@3x.png";
import Celular08x2 from "../../Images/celular8@2x.png";
import Celular08 from "../../Images/celular8.png";
import Celular09x3 from "../../Images/celular9@3x.png";
import Celular09x2 from "../../Images/celular9@2x.png";
import Celular09 from "../../Images/celular9.png";
import Celular10x3 from "../../Images/celular10@3x.png";
import Celular10x2 from "../../Images/celular10@2x.png";
import Celular10 from "../../Images/celular10.png";
import Celular11x3 from "../../Images/celular11@3x.png";
import Celular11x2 from "../../Images/celular11@2x.png";
import Celular11 from "../../Images/celular11.png";
import Celular12x3 from "../../Images/celular12@3x.png";
import Celular12x2 from "../../Images/celular12@2x.png";
import Celular12 from "../../Images/celular12.png";
//importação das imagens

const Image = ({ image, image2x, image3x }) => {
  return (
    <img
      className={style.image}
      srcSet={`${image}, ${image2x} 2x, ${image3x} 3x`}
      src={image3x}
      alt="imagem celular"
      title="imagem celular"
    />
  );
};

const Newsletter = () => {
  return (
    <section id={style.divNewSletter}>
      <div className={style.content}>
        <p className={style.title}>Assine nossa newsletter</p>
        <p className={style.subTitle}>
          Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada
          15 dias.
        </p>
        <div className={style.inputs}>
          <Input nome="Nome" />
          <Input nome="Email" />
        </div>
        <Button nome="Assinar Newsletter" />
      </div>
      <div className={style.listCelular}>
        <ul>
          <li>
            <Image
              image={Celular01}
              image2x={Celular01x2}
              image3x={Celular01x3}
            />
          </li>
          <li>
            <Image
              image={Celular02}
              image2x={Celular02x2}
              image3x={Celular02x3}
            />
          </li>
          <li>
            <Image
              image={Celular03}
              image2x={Celular03x2}
              image3x={Celular03x3}
            />
          </li>
        </ul>
        <ul>
          <li>
            <Image
              image={Celular04}
              image2x={Celular04x2}
              image3x={Celular04x3}
            />
          </li>
          <li>
            <Image
              image={Celular05}
              image2x={Celular05x2}
              image3x={Celular05x3}
            />
          </li>
          <li>
            <Image
              image={Celular06}
              image2x={Celular06x2}
              image3x={Celular06x3}
            />
          </li>
        </ul>
        <ul>
          <li>
            <Image
              image={Celular07}
              image2x={Celular07x2}
              image3x={Celular07x3}
            />
          </li>
          <li>
            <Image
              image={Celular08}
              image2x={Celular08x2}
              image3x={Celular08x3}
            />
          </li>
          <li>
            <Image
              image={Celular09}
              image2x={Celular09x2}
              image3x={Celular09x3}
            />
          </li>
        </ul>
        <ul>
          <li>
            <Image
              image={Celular10}
              image2x={Celular10x2}
              image3x={Celular10x3}
            />
          </li>
          <li>
            <Image
              image={Celular11}
              image2x={Celular11x2}
              image3x={Celular11x3}
            />
          </li>
          <li>
            <Image
              image={Celular12}
              image2x={Celular12x2}
              image3x={Celular12x3}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Newsletter;
