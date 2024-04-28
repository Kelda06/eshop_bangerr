import { Link } from "react-router-dom";
import "./Grape.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

export default function Grape() {
  const handleAddToCart = () => {
    axios.post("http://localhost:7070/cart/add", { authToken: cookies.get("authToken"), itemID: "662e3a7772a618f167f67cf6", amount:"1"})
      .then(response => {
        console.log(cookies.get('authToken'));
        console.log("Položka byla úspěšně přidána do košíku:", response.data);
      })
      .catch(error => {
        console.error("Chyba při přidávání položky do košíku:", error);
      });
  };
  return (
    <>
     
     <Header></Header>

     <div id="Peach">


      <div className="container">
        <div className="pic">
          <img
            src="../img/puk.png"
            
            alt="puk"
          ></img>
        </div>
        <div className="buy">
          <p className="name">
            <strong>SHOCAFF ICY GRAPEFRUIT 80m/g</strong>
          </p>

          <div class="container2">
            <div className="desc">
              <div className="desc1"><li>Zbrusu nový kofeinový sáček vás nabudí kdykoliv!</li></div>
              <li>Svěží chut grepu kterou si zamilujete</li>
              <li>Balení obsahuje 15 sáčků o síle 80 mg/g</li>
            </div>

          <div className="container2_1">

            <div className="kofein">
            <img
            src="../img/kofein.png"></img>
            </div>

            <div className="order">
              <div className="price">
                <strong>
                  <h1>129 Kč</h1>
                </strong>
              </div>
              <br />
              <div className="stav">
                <strong>
                  <p>SKLADEM</p>
                </strong>
              </div>
               <button onClick={handleAddToCart} type="button" className="CartButton">
                  Do košíku
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="container3">
        <div className="info">
          <p>
            <h1>Informace o produktu</h1>
          </p>
          <div className="text">
            <br></br>
            <br></br>
            <p className="par">
             Obsah puku:  <span className="pargap">15 porcí po 0,76g</span>
            </p>
            <br></br>
            <p className="par">
           Hmotnost: <span className="pargap">12g</span>
            </p>
            <br></br>
            <p className="par">
             Obsah kofeinu:  <span className="pargap">80 mg/g</span>
            </p>
            <br></br>
            <p className="par">
             Příchut:  <span className="pargap">Broskev</span>
            </p>
          </div>
        </div>
        <div className="parameters">
          <p>
            <h1>Parametry produktu</h1>
            <div className="text">
              <br></br>
              <br></br>
              <p className="par">
                Hmotnost: <span className="pargap">0,027 Kg</span>
              </p>
              <br></br>
              <p className="par">
                Síla: <span className="pargap">Vystřelí tě na měsíc</span>
              </p>
              <br></br>
              <p className="par">
                Velikost sáčku: <span className="pargap">Slim</span>
              </p>
              <br></br>
              <p className="par">
                Příchut: <span className="pargap">Iced peach</span>
              </p>
            </div>
          </p>
        </div>
      </div>

      <div className="container4">
        <div className="manual">
          <div className="man_text">
            <h2>Jak používat SHOCAFF</h2>
          </div>
          <div className="manual_pic">
            <img src="../img/pouziti.jpeg" width="100%" alt="pouziti"></img>
          </div>
        </div>

        <div className="help">
          <div className="help_t">
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
