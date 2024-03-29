import { Link } from "react-router-dom"
import "./Cart.css"

export default function Cart(){
    return(
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

    <div class="order">
        <div class="product">
            <h2>Vybraný Produkt</h2>
            <p>Název: <span id="productName">Název Produktu</span></p>
            <p>Cena: <span id="productPrice">1000</span> Kč</p>
        </div>

        <div class="shipping">
            <h2>Výběr Dopravy</h2>
            <select id="shippingMethod" onchange="updateTotal()">
                <option value="100">Standardní - 100 Kč</option>
                <option value="200">Expresní - 200 Kč</option>
                <option value="0">Osobní odběr - zdarma</option>
            </select>
        </div>

        <div class="summary">
            <p>Mezisoučet: <span id="subtotal">1000</span> Kč</p>
            <p>Celkově: <span id="total">1100</span> Kč</p>
        </div>
    </div>
    <script src="js/cart.js"></script>

    <div class="whatsapp-chat">
        <a href="https://wa.me/420725828088" target="_blank">Chatujte s námi na WhatsApp</a>
    </div>
        </>
    )
}