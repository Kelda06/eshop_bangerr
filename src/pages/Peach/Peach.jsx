import { Link } from "react-router-dom";
import "./Peach.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

export default function Peach() {
  return (
    <>
     
     <Header></Header>

     <div id="Peach">


      <div class="container">
        <div class="pic">
          <img
            src="../img/peach.png"
            width="400px"
            height="400px"
            alt="peach"
          ></img>
        </div>
        <div class="buy">
          <p class="name">
            <strong>SHOCAFF ICY GRAPEFRUIT 80m/g</strong>
          </p>

          <div class="container2">
            <div>
              <li>Zbrusu nový kofeinový sáček vás nabudí kdykoliv!</li>
              <li>Svěží chut broskve kterou si zamilujete</li>
              <li>Balení obsahuje 15 sáčků o síle 80 mg/g</li>
            </div>

            <div class="order">
              <div class="price">
                <strong>
                  <h1>129 Kč</h1>
                </strong>
              </div>
              <div class="stav">
                <strong>
                  <p>SKLADEM</p>
                </strong>
              </div>
              <button type="button" class="CartButton">
                Do košíku
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div class="container3">
        <div class="info">
          <p>
            <h1>Informace o produktu</h1>
          </p>
          <div class="text">
            <br></br>
            <br></br>
            <p class="par">
              Obsah puku: <span class="pargap">15 porcí po 0,76g</span>
            </p>
            <br></br>
            <p class="par">
              Hmotnost: <span class="pargap">12g</span>
            </p>
            <br></br>
            <p class="par">
              Obsah kofeinu: <span class="pargap">80 mg/g</span>
            </p>
            <br></br>
            <p class="par">
              Příchut: <span class="pargap">Broskev</span>
            </p>
          </div>
        </div>
        <div class="parameters">
          <p>
            <h1>Parametry produktu</h1>
            <div class="text">
              <br></br>
              <br></br>
              <p class="par">
                Hmotnost: <span class="pargap">0,027 Kg</span>
              </p>
              <br></br>
              <p class="par">
                Síla: <span class="pargap">Vystřelí tě na měsíc</span>
              </p>
              <br></br>
              <p class="par">
                Velikost sáčku: <span class="pargap">Slim</span>
              </p>
              <br></br>
              <p class="par">
                Příchut: <span class="pargap">Iced peach</span>
              </p>
            </div>
          </p>
        </div>
      </div>

      <div class="container4">
        <div class="manual">
          <div class="man_text">
            <h2>Jak používat SHOCAFF</h2>
          </div>
          <div class="manual_pic">
            <img src="../img/pouziti.jpg" width="70%%" alt="pouziti"></img>
          </div>
        </div>

        <div class="help">
          <div class="help_t">
            <h2>Potřebuješ poradit?</h2>
          </div>
          <br></br>
          <br></br>
          <div className="help_text">
          <ul>
            <li>Tel: 725 828 088 ( Po - Pá: 7:00 - 16:00)</li>
            <br />
            <li>E-mail: info@energain.cz</li>
          </ul>
          </div>
        </div>
      </div>

      </div>

      <Footer></Footer>
      
    </>
  );
}
