import "./MainPage.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

export default function MainPage() {
  return (
    <>
    <div id="MainPage">

   <Header></Header>
   
      

      <div class="mainp">
        <img
          src="../img/uvodni.png"
          width="100%"
          height="100%"
          alt="pozadi"
        />
      </div>
      <div class="main_text">
        <div class="puk1">
          <img src="../img/puk.png" />
        </div>
        <div class="puk2">
          <img src="../img/peach.png" />
        </div>
        <div class="puk3">
          <img src="../img/lemon.png" />
        </div>
        <div class="puk4">
          <img src="../img/mint.png" />
        </div>
      </div>

      <div class="second_text">
        <h2></h2>
      </div>

      <div class="vyhody">
        <div class="i1">
          <h2>
            Proč vyměnit energetické nápoje za <strong>SHOCAFF</strong>?
          </h2>

          <p>SHOCAFF JE NOVÝ ENERGETICKÝ BOOSTER</p>

          <p> FUNGUJE RYCHLEJI NEŽ ENERGETICKÉ NÁPOJE</p>

          <p> 80 MG KOFEINU V SÁČKU</p>

          <p> S VITAMINEM B5</p>

          <p> BEZ NIKOTINU</p>

          <p> BEZ CUKRU</p>

          <p> VEGANSKÝ</p>
        </div>

        <div class="i2">
          <div class="ipuk">
            <img src="../img/puk.png" alt="puk" />
          </div>
        </div>
      </div>
      <div class="sm">
        <h2>SLEDUJ NÁS NA SOCIÁLNÍCH SÍTÍCH</h2>

        <div class="loga">
          <a href="https://www.instagram.com/shocaff_czsk/" target="_blank"></a>
          <img src="../img/ig.png" width="200px" height="200px" alt="" />

          <a href="https://www.tiktok.com/cs-CZ/" targer="_blank">
            <img
              src="../img/tiktok.png"
              width="200px"
              height="200px"
              alt=""
            />
          </a>
        </div>
      </div>



      <Footer></Footer>
      </div>
    </>
  );
}
