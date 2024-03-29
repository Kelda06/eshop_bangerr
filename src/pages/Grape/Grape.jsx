import { Link } from "react-router-dom";
import "./Grape.css"

export default function Grape() {
  return (
    <>
      <header>
        <div class="bar">
          Doprava <strong>zdarma</strong> při nákupu v hodnotě 1500 Kč
        </div>
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
        </div>
      </nav>

      <div class="container">
        <div class="pic">
          <img src="../img/puk.png" alt=""></img>
        </div>
        <div class="buy">
          <p class="name">
            <strong>SHOCAFF ICY GRAPEFRUIT 80m/g</strong>
          </p>
          <div class="container2">
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
        </div>
      </div>
      <footer>&copy; 2023 Energain s.r.o.</footer>
    </>
  );
}
