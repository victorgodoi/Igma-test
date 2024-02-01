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

const clients = () => {
  const widthImage = 242;
  const heightIamge = 176;

  return (
    <div id={style.clients}>
      <div className={style.Content}>
        <p>
          Expressamos mais de 20 anos de experiência criando plataformas
          digitais para as maiores empresas do Brasil, impactando milhões de
          pessoas.
        </p>
      </div>
      <div className={style.ListClients}>
        <ul>
          <li>
            <img
              src={MRV}
              width={widthImage}
              height={heightIamge}
              alt="Logo da MRV"
              title="Logo da MRV"
            />
          </li>
          <li>
            <img
              src={Comgas}
              width={widthImage}
              height={heightIamge}
              alt="Logo da Comgas"
              title="Logo da Comgas"
            />
          </li>
          <li>
            <img
              src={Centauro}
              width={widthImage}
              height={heightIamge}
              alt="Logo da Centauro"
              title="Logo da Centauro"
            />
          </li>
          <li>
            <img
              src={Honda}
              width={widthImage}
              height={heightIamge}
              alt="Logo da Honda"
              title="Logo da Honda"
            />
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={BrasilPrev}
              width={widthImage}
              height={heightIamge}
              alt="Logo da BrasilPrev"
              title="Logo da BrasilPrev"
            />
          </li>
          <li>
            <img
              src={Bayer}
              width={widthImage}
              height={heightIamge}
              alt="Logo da Bayer"
              title="Logo da Bayer"
            />
          </li>
          <li>
            <img
              src={NeoEnergia}
              width={widthImage}
              height={heightIamge}
              alt="Logo da NeoEnergia"
              title="Logo da NeoEnergia"
            />
          </li>
          <li>
            <img
              src={Ambev}
              width={widthImage}
              height={heightIamge}
              alt="Logo da Ambev"
              title="Logo da Ambev"
            />
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={IDB}
              width={widthImage}
              height={heightIamge}
              alt="Logo da IDB"
              title="Logo da IDB"
            />
          </li>
          <li>
            <img
              src={CVC}
              width={widthImage}
              height={heightIamge}
              alt="Logo da CVC"
              title="Logo da CVC"
            />
          </li>
          <li>
            <img
              src={Google}
              width={widthImage}
              height={heightIamge}
              alt="Logo da Google"
              title="Logo da Google"
            />
          </li>
          <li>
            <img
              src={Sirio}
              width={widthImage}
              height={heightIamge}
              alt="Logo da Sírio-Libanês"
              title="Logo da Sírio-Libanês"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default clients;
