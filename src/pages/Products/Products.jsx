import { Link } from "react-router-dom";
import "./Products.css";

export default function Products() {
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
      <h1 class="main_text">NAŠE PRODUKTY</h1>
      <h3 class="second_text">
        <span>
          Kofeinové sáčky <strong>SHOCAFF</strong> jako ultimátní dávka kofeinu.
          Vyber si jednu z příchutí a objev kouzlo <strong>SHOCAFFU</strong>
        </span>
      </h3>

      <div class="products1">
        <div class="container1">
          <a href="../grape.html">
            <div class="p1">
              <img src="../img/puk.png" width="100%" height="100%" />
            </div>
            <strong>
              <p>SHOCAFF ICY GREPEFRUIT 80 mg/g</p>
            </strong>
            <br></br>
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
          </a>
        </div>
        <div class="container2">
        <Link to={"/peach"}>
            <div class="p2">
              <img src="../img/peach.png" width="100%" height="100%" />
            </div>
            <p>SHOCAFF ICE PEACH 80 mg/g</p>
            <br></br>
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
            </Link>
        </div>
      </div>

      <div class="products2">
        <div class="container3">
          <a href="../lemon.html">
            <div class="p3">
              <img src="../img/lemon.png" width="100%" height="100%" />
            </div>
            <p>SHOCAFF ICE TEA LEMON 80 mg/g</p>
            <br></br>
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
          </a>
        </div>
        <div class="container3">
          <a href="../mint.html">
            <div class="p4">
              <img src="../img/mint.png" width="100%" height="100%" />
            </div>
            <p>SHOCAFF FRESH MINT 80 mg/g</p>
            <br></br>
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
          </a>
        </div>
      </div>

      <div class="whatsapp-chat">
        <a href="https://wa.me/420725828088" target="_blank">
          Chatujte s námi na WhatsApp
        </a>
      </div>

      <footer>&copy; 2023 Energain s.r.o.</footer>
    </>
  );
}
