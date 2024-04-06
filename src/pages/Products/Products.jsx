import { Link } from "react-router-dom";
import "./Products.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import ProductsPeach from "../../components/Header/ProductsPeach/ProductsPeach";


export default function Products() {
  return (
    <>
    

      
      <Header></Header>
  
      <div id="products">
      
      
      <h1 class="main_text">NAŠE PRODUKTY</h1>
      <h3 class="second_text">
        <span>
          Kofeinové sáčky <strong>SHOCAFF</strong> jako ultimátní dávka kofeinu.
          Vyber si jednu z příchutí a objev kouzlo <strong>SHOCAFFU</strong>
        </span>
      </h3>

      <div class="products1">
        


        <ProductsPeach></ProductsPeach>
         

        
        



          <ProductsPeach></ProductsPeach>
        



        
      </div>
      <div className="products2">
      <ProductsPeach></ProductsPeach>


      <ProductsPeach></ProductsPeach>


      </div>

      </div>
      <Footer></Footer>
      
    </>
  );
}
