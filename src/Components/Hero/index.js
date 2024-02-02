import style from "./hero.module.scss";
import imageHero3x from "../../Images/Image@3x.png";
import LogotipoIgma from "../../Images/logotipoIgma.svg";
import vetorImage from "../../Images/vetorImage.svg";

const Hero = () => {
  return (
    <section id={style.hero}>
      <div className={style.divImg}>
        <img
          className={style.floatingImage}
          src={vetorImage}
          width="60px"
          height="157px"
          alt="vetor de imagem"
          title="vetor de imagem"
        />
        <img
          src={imageHero3x}
          className={style.imageHero}
          alt="paisagem vulcanica"
          title="paisagem vulcanica"
        />
      </div>
      <div className={style.divContent}>
        <div>
          <p>Prazer, somos</p>
          <img
            src={LogotipoIgma}
            width="73xp"
            height="30px"
            alt="Logotipo da Igma"
            title="Logotipo da Igma"
          />
        </div>
        <h1>
          Acreditamos em um mundo onde experiências incríveis são essenciais.
        </h1>
        <p>
          Unimos design e tecnologia para resolver problemas complexos de
          empresas. Criamos produtos digitais que revolucionam o relacionamento
          entre empresas e consumidores.
        </p>
      </div>
    </section>
  );
};

export default Hero;
