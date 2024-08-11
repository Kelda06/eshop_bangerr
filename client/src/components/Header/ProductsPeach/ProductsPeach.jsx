import "./ProductsPeach.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function ProductsPeach() {
  const handleAddToCart = () => {
    axios.put("http://localhost:7070/cart/add", { authToken: cookies.get("authToken"), itemID: "66b769a61514e85156740a08", amount:"1"})
      .then(response => {
        console.log(cookies.get('authToken'));
        console.log("Položka byla úspěšně přidána do košíku:", response.data);
      })
      .catch(error => {
        console.error("Chyba při přidávání položky do košíku:", error);
      });
  };

  return (
    <>
      <div id="p">
        <div className="container">
          <Link to={"/peach"}>
            <div className="p">
              <img src="../img/peach.png" width="300px" height="300px" />
            </div>
            <p>SHOCAFF ICE PEACH 80 mg/g</p>
            <br></br>
            <div className="container2">
              <div className="price">
                <strong>
                  <h3>129 Kč</h3>
                </strong>
              </div>
              <div className="cart">
                <div className="stav">
                  <strong>
                    <p>SKLADEM</p>
                  </strong>
                </div>
                <button onClick={handleAddToCart} type="button" className="CartButton">
                  Do košíku
                </button>
                
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </>
  );
}