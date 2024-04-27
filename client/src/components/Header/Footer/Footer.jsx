import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return(

        <>
        <div id="footer">

         <div className="whatsapp-chat">
        <a href="https://wa.me/420725828088" target="_blank">
          Chatujte s námi na WhatsApp
        </a>
      </div>

      
        <div className="contacts">
         
          <div className="mate">
          <div className="mail">
            <img src="../img/mail.jpg" alt="mail" />
        <a href="mailto:info@energain.cz">info@energain.cz</a>
          </div>

          <div className="tel">
            <img src="../img/phone.png" alt="" />
            <a href="tel:+420 725 828 088">+420 725 828 088</a>
          </div>
          </div>

          <div className="igtik">
            <div className="instagram">
            <img src="../img/ig.png" alt="Instagram" />
            <a href="https://www.instagram.com/shocaff_czsk/">@shocaff_czsk</a>
            </div>
            <div className="tiktok">
            <img src="../img/tiktok.webp" alt="Instagram" />
            <a href="https://www.tiktok.com/cs-CZ/">@shocaff_czsk</a>
            </div>
          </div>
        </div>

        

        


        <footer>
        &copy; 2023 Energain s.r.o.
        </footer>

        </div>
        </>

    );
    
};