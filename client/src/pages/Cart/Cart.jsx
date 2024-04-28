import { useEffect, useState } from "react"; 
import axios from "axios";
import "./Cart.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import Cookies from 'universal-cookie';
import { set } from "mongoose";
const cookies = new Cookies();
export default function Cart(){
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log("helloo")
        axios.post("http://localhost:7070/order/detail", { authToken: cookies.get("authToken") })
        .then(response => {
            console.log("Data získaná z back-endu:", response.data);
            if (cartItems) {
                setCartItems(response.data);
            }
            
        })
        .catch(error => {
            console.error("Chyba při získávání dat z back-endu:", error);
        });
    }, []); // Empty dependency array ensures that this effect runs only once, on component mount

    function renderCartItem() {
        console.log(cartItems)
        return cartItems.map((item, index) => (
            <div key={index}>
                <p>Název: <span id="productName">{item.name}</span></p>
                <p>Cena: <span id="productPrice">{item.price} Kč</span></p>
                <p>Počet: <span id="productAmount">{item.amount}</span></p>
            </div>
        ));
    }

    return(
        <>
            <Header />
            <div id="cart">
                <h1>Pokladna</h1>
                <div className="order">
                    <div className="product">
                        <h2>Vybraný Produkt</h2>
                        {renderCartItem()}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}
