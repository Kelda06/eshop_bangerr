import "./MainPage.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

export default function MainPage() {
{
 
 
}

  return (

    
   
    <>
    <div id="MainPage">

   <Header></Header>
   
      

      <div className="mainp">
        <img
          src="../img/uvodni.png"
          width="100%"
          height="100%"
          alt="pozadi"
        />
      </div>

      <div className="gallery">
        
          <img src="../img/puk.png" alt="Slide 1" />
          <img src="../img/peach.png" alt="Slide 2" />
          <img src="../img/peach.png" alt="Slide 3" />
          <img src="../img/mint.png" alt="Slide 4" />
        </div>

        <div className="phone-gallery">
          <img src="../img/peach.png" alt="puk" />
         
        </div>
      

      



     

     
      <div className="vyhody">
        <div className="i1">
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

        <div className="i2">
          <div className="ikofein">
         <img src="../img/open-snus.webp" alt="kofein" />
          </div>
        </div>
      </div>

      <div className="obsah">
        <div className="text">
        <h2>Co kofeinové sáčky SHOCAFF obsahují?</h2>
        

          <br />
          <p>Kofeinové sáčky SHOCAFF jsou vyrobeny patentovaným výrobním postupem, který zajišťuje bezpečné a chutné použití.</p>
          <br />
          <p>Sáčky SHOCAFF jsou vyrobeny pouze z vysoce kvalitních surovin, jako je kofein, voda, dřevitá vlákna(celulóza), vitamín B5 a dochucovadla.</p>
        </div>
        <div className="marks">
          <img src="../img/material.png" alt="mark" />
          <img src="../img/voda.png" alt="mark" />
          <img src="../img/sladidla.png" alt="mark" />
          <img src="../img/kofein.png" alt="mark" />
          
        </div>
      </div>

      


      <div className="obsah">
        <div className="text">
          <h2>Jak se kofeinové sáčky SHOCAFF používají?</h2>
          <br />
          <p>Vložíte si sáček pod horní ret a necháte maximálně 30 minut působit.</p> 
          <br />
          <p>Poté ho vyndáte a vložíte do přihrádky na horní straně puku</p>

        </div>
        <div className="manual">
          <img src="../img/pouziti.jpeg" alt="mark" />
        </div>
      </div>



      
      



      <Footer></Footer>
      </div>
    </>
  );
}
