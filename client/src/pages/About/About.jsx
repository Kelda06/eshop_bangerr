import "./About.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

export default function About() {
  return (
    <>

    <Header></Header>
    <div id="about">

      <div className="mainp">
        <img src="../img/uvodni.png" width="100%" height="100%" alt="pozadi" />
      </div>

      <div className="line"></div>


      <div className="obsah">
        <div className="text">
          <h2>Co je to SHOCAFF?</h2>
          <br />
          <p>Shocaff je nový energetický kofeinový sáček bez nikotinu!</p> 
          <br />
          <p>Slouží jako zdravější náhrada k energetickým nápojům. Neobsahuje žadné cukry ani další škodlivé látky.</p>
          <br />
          <p>Je vhodný pro diskretní použití když potřebujete rychlý přísun energie. </p>

        </div>
        <div className="logo">
          
        </div>
      </div>

      </div>

      <Footer></Footer>

      
    </>
  );
}
