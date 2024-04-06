import "./About.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

export default function About() {
  return (
    <>

    <Header></Header>
    <div id="about">

      <div class="mainp">
        <img src="../img/uvodni.png" width="100%" height="100%" alt="pozadi" />
      </div>

      <div class="container">
        <div class="i1">
          <h2>
            Co je to <strong>SHOCAFF</strong>
          </h2>
          <p>
            Se Scooper Energy získáte dokonalého společníka pro dlouhotrvající
            energii, bez nevýhod cukru a nikotinu. Každý sáček je veganský a
            obsahuje 80 mg kofeinu, který se rychle vstřebává ústní sliznicí.
            Náš Energy Snus je navíc obohacen o vitamín B5.
          </p>

          <p>
            Pokud hledáte pohodlnou a povzbuzující alternativu k energetickým
            nápojům a kávě, Scooper Energy je odpovědí. Užijte si přirozený,
            dlouhotrvající přísun energie a zažijte, jak se tento Energy Snus
            stane vaším spolehlivým společníkem, ať už v tělocvičně, na
            univerzitě, v práci nebo na další párty!
          </p>
        </div>

        <div class="i2">
          <div class="ipuk">
            <img src="../img/puk.png" width="70%" height="95%" alt="puk" />
          </div>
        </div>
      </div>

      </div>

      <Footer></Footer>

      
    </>
  );
}
