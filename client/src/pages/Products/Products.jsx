import { Link } from "react-router-dom";
import "./Products.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import ProductsPeach from "../../components/Header/ProductsPeach/ProductsPeach";
import ProductsGrape from "../../components/Header/ProductsGrape/ProductsGrape";
import Product from "../../components/Product/Product";


export default function Products() {
  return (
    <>
    

      
      <Header></Header>

      <div className="mainp">
        <img
          src="../img/uvodni.png"
          width="100%"
          height="100%"
          
          alt="pozadi"
        />
      </div>
  
      <div id="products">
      <div className="text">
      
      <h1 className="main_text">NAŠE PRODUKTY</h1>
     
      </div>

     
    

      <div className="product">
      <Product></Product>
      </div>



      </div>
      <Footer></Footer>
      
    </>
  );
}
