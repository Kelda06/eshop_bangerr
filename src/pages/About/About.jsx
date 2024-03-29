import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <header>
        <div class="bar">
          Doprava <strong>zdarma</strong> při nákupu v hodnotě 1500 Kč
        </div>
      </header>

      <nav>
        <div class="logo"></div>
        <div class="m1">
          <Link to={"/"}>
            <a>Domov</a>
          </Link>
          <Link to={"/products"}>
            <a>Naše produkty</a>
          </Link>
          <Link to={"/about"}>
            <a>Co je to SHOCAFF?</a>
          </Link>
          <Link to={"/contacts"}>
            <a>Kontakty</a>
          </Link>
          <Link to={"/"}>
            <a>Instagram</a>
          </Link>
        </div>
      </nav>

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

      <div class="whatsapp-chat">
        <a href="https://wa.me/420725828088" target="_blank">
          Chatujte s námi na WhatsApp
        </a>
      </div>
    </>
  );
}
