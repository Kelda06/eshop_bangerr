import { Link } from "react-router-dom";
import "./Contacts.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

export default function Contacts() {
  return (
   
    <>
      
      <Header></Header>
      <div id="contacts">
      

      <div className="container">
        <div className="formular">
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

        <div className="line"></div>

        <div className="spoluprace">
          <h1>VELKOOBCHODNÍ SPOLUPRÁCE</h1>
          <div>
            Chcete od nás nakupovat za <strong>velkoobchodní ceny?</strong>
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
          <div className="company">
            <img src="../img/logo_shocaff.png" width="100%" height="100%" />
            <img
              src="../img/logo_energain.png" width="100%" height="100%" />
          </div>
        </div>
      </div>

      </div>
      

      <Footer></Footer>
      
    </>
    
  );
}
