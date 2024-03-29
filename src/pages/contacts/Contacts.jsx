import { Link } from "react-router-dom";
import "./Contacts.css"

export default function Contacts() {
  return (
    <>
      <header>
        <div class="bar">Máte dotazy? Neváhejte nás kontaktovat!</div>
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
            <Link to={"/cart"}>
            <a>Košík</a>
            </Link>
        </div>
      </nav>

      <div class="container">
        <div class="formular">
          <h1>KONTAKTNÍ FORMULÁŘ</h1>

          <form action="/submit" method="post">
            <label for="name">Jméno:</label>
            <input type="text" id="name" name="name" required></input>
            <br></br>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required></input>
            <br></br>

            <label for="message">Zpráva:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <br></br>

            <input type="submit" value="Odeslat"></input>
          </form>
        </div>

        <div class="spoluprace">
          <h1 class="main_text2">VELKOOBCHODNÍ SPOLUPRÁCE</h1>
          <div>
            Chcete od nás nakupovat za <strong>velkoobchodní ceny?</strong>{" "}
          </div>
          <br></br>
          <div>
            Kontaktujte nás E-mail: <strong>spoluprace@energain.cz</strong> nebo
            na tel. <strong>420 725 828 088</strong>
          </div>
          <br></br>
          <div>
            <strong>Pracovní doba:</strong> Po - Pá: 7:00 - 16:00
          </div>
          <div class="company">
            <img src="../img/logo_shocaff.png" width="100%" height="100%" />
            <img
              src="../img/logo_energain.png"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>

      <footer>&copy; 2023 Energain s.r.o.</footer>

      <div class="whatsapp-chat">
        <a href="https://wa.me/420725828088" target="_blank">
          Chatujte s námi na WhatsApp
        </a>
      </div>
    </>
  );
}
