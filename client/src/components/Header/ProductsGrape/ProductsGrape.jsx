import "./ProductsGrape.css";
import { Link } from "react-router-dom";


export default function ProductsGrape() {
    return(

        <>
         <div id="p">
          
         <div class="container">
        <Link to={"/grape"}>
            <div class="p">
              <img src="../img/puk.png" width="300px" height="300px" />
            </div>
            <p>SHOCAFF ICE PEACH 80 mg/g</p>
            <br></br>
            <div className="container2">
            <div class="price">
              <strong>
                <h3>129 Kč</h3>
              </strong>
            </div>
            <div class="cart">
              <div class="stav">
                <strong>
                  <p>SKLADEM</p>
                </strong>
              </div>
              <button type="button" class="addToCartButton">
                Do košíku
              </button>
            </div>
            </div>
            </Link>
        </div>
        </div>
        </>

    );

};