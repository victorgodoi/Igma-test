import style from "./clients.module.scss";
import MRV from "../../Images/mrv.svg";
import Comgas from "../../Images/comgas.svg";
import Centauro from "../../Images/centauro.svg";
import Honda from "../../Images/honda.svg";
import BrasilPrev from "../../Images/BrasilPrev.svg";
import Bayer from "../../Images/bayer.svg";
import NeoEnergia from "../../Images/neoenergia.svg";
import Ambev from "../../Images/ambev.svg";
import IDB from "../../Images/idb.svg";
import CVC from "../../Images/cvc.svg";
import Google from "../../Images/google.svg";
import Sirio from "../../Images/hsl.svg";

const Clients = () => {
  return (
    <section id={style.clients}>
      <div className={style.content}>
        <p>
          Expressamos mais de 20 anos de experiência criando plataformas
          digitais para as maiores empresas do Brasil, impactando milhões de
          pessoas.
        </p>
      </div>
      <div className={style.listClients}>
        <img src={MRV} alt="Logo da MRV" title="Logo da MRV" />
        <img
          src={BrasilPrev}
          alt="Logo da BrasilPrev"
          title="Logo da BrasilPrev"
        />
        <img src={IDB} alt="Logo da IDB" title="Logo da IDB" />
        <img src={Comgas} alt="Logo da Comgas" title="Logo da Comgas" />
        <img src={Bayer} alt="Logo da Bayer" title="Logo da Bayer" />
        <img src={CVC} alt="Logo da CVC" title="Logo da CVC" />
        <img src={Centauro} alt="Logo da Centauro" title="Logo da Centauro" />
        <img
          src={NeoEnergia}
          alt="Logo da NeoEnergia"
          title="Logo da NeoEnergia"
        />
        <img src={Google} alt="Logo da Google" title="Logo da Google" />
        <img src={Honda} alt="Logo da Honda" title="Logo da Honda" />
        <img src={Ambev} alt="Logo da Ambev" title="Logo da Ambev" />
        <img
          src={Sirio}
          alt="Logo da Sírio-Libanês"
          title="Logo da Sírio-Libanês"
        />
      </div>
    </section>
  );
};

export default Clients;
