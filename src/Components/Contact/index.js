import style from "./contact.module.scss";
import Button from "../Button";
import Input from "../InputText";
//importação das imagens
import Celular02x3 from "../../Images/celular2@3x.png";
import Celular02x2 from "../../Images/celular2@2x.png";
import Celular02 from "../../Images/celular2.png";
import Celular05x3 from "../../Images/celular5@3x.png";
import Celular05x2 from "../../Images/celular5@2x.png";
import Celular05 from "../../Images/celular5.png";
import Celular08x3 from "../../Images/celular8@3x.png";
import Celular08x2 from "../../Images/celular8@2x.png";
import Celular08 from "../../Images/celular8.png";
import Celular11x3 from "../../Images/celular11@3x.png";
import Celular11x2 from "../../Images/celular11@2x.png";
import Celular11 from "../../Images/celular11.png";
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

const Column = ({ fast, className }) => {
  return (
    <div className={`${style.column} ${className}`}>
      <div className={`${style.devices} ${fast && style.fast}`}>
        <Image image={Celular05} image2x={Celular05x2} image3x={Celular05x3} />
        <Image image={Celular02} image2x={Celular02x2} image3x={Celular02x3} />
        <Image image={Celular08} image2x={Celular08x2} image3x={Celular08x3} />
        <Image image={Celular11} image2x={Celular11x2} image3x={Celular11x3} />
      </div>
      <div className={`${style.devices} ${fast && style.fast}`}>
        <Image image={Celular05} image2x={Celular05x2} image3x={Celular05x3} />
        <Image image={Celular02} image2x={Celular02x2} image3x={Celular02x3} />
        <Image image={Celular08} image2x={Celular08x2} image3x={Celular08x3} />
        <Image image={Celular11} image2x={Celular11x2} image3x={Celular11x3} />
      </div>
    </div>
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
        <Column />
        <Column fast={true} className={style.columnVisibility} />
        <Column className={style.columnVisibility} />
        <Column fast={true} className={style.columnVisibility} />
      </div>
    </section>
  );
};

export default Newsletter;
