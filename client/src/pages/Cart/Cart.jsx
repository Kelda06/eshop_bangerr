import { Link } from "react-router-dom"
import "./Cart.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import Cartjs from "./Cartjs";


export default function Cart(){
    return(
        <>
        
        <Header></Header>
        <div id="cart">

    <h1>Pokladna</h1>
    <form action="/submit-your-form-here" method="post">
        <label for="name">Jméno a příjmení:</label><br></br>
        <input type="text" id="name" name="name" required></input><br></br>
        
        <label for="street">Ulice a číslo popisné:</label><br></br>
        <input type="text" id="street" name="street" required></input><br></br>
        
        <label for="postal-code">PSČ:</label><br></br>
        <input type="text" id="postal-code" name="postal-code" pattern="\d{5}" title="PSČ by mělo být 5 číslic." required></input><br></br>
        
        <label for="city">Město:</label><br></br>
        <input type="text" id="city" name="city" required></input><br></br>
        
        <label for="phone">Telefonní číslo:</label><br></br>
        <input type="tel" id="phone" name="phone" pattern="\d{9}" title="Telefonní číslo by mělo být 9 číslic." required></input><br></br>
        
        <label for="email">Email:</label><br></br>
        <input type="email" id="email" name="email" required></input><br></br>
        
        <input type="submit" value="Odeslat"></input>
    </form>

    <div className="order">
        <div className="product">
            <h2>Vybraný Produkt</h2>
            <p>Název: <span id="productName">Název Produktu</span></p>
            <p>Cena: <span id="productPrice">1000</span> Kč</p>
        </div>

        <div className="shipping">
            <h2>Výběr Dopravy</h2>
            <select id="shippingMethod" onchange="updateTotal()">
                <option value="100">Standardní - 100 Kč</option>
                <option value="200">Expresní - 200 Kč</option>
                <option value="0">Osobní odběr - zdarma</option>
            </select>
        </div>

        <div className="summary">
            <p>Mezisoučet: <span id="subtotal">1000</span> Kč</p>
            <p>Celkově: <span id="total">1100</span> Kč</p>
        </div>
    </div>
    <script src="js/Cartjs.js"></script>

    </div>

   <Footer></Footer>
        </>
    )
}