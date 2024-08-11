import React, { Component } from "react"; 
import axios from "axios";
import "./Cart.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };
    }

    componentDidMount() {
        this.requestCartItems();
        this.renderCartItem();
      
    }

    requestCartItems(){
        axios.get("http://localhost:7070/order/detail/"+cookies.get("authToken"))
        .then(response => {
            if (Array.isArray(response.data)) {
                this.setState({ cartItems: response.data });
            } else console.log(response.data);
        })
        .catch(error => {
            console.error("Chyba při získávání dat z back-endu:", error);
        });
    }

    removeFromCart = (itemID) => {
        console.log(itemID)
        axios.put("http://localhost:7070/cart/delete/"+cookies.get("authToken"), {itemID: itemID, amount:1 })
            .then(response => {
                console.log("Produkt byl úspěšně odebrán z košíku:", response.data);
                this.requestCartItems();
                this.renderCartItem();

            })
            .catch(error => {
                console.error("Chyba při odebírání produktu z košíku:", error);
            });
    };
    
   
    
    renderCartItem() {
        console.log(this.state.cartItems)
        return this.state.cartItems.map((item, index) => (
            <div key={index}>
                <p>Název: <span id="productName">{item.name}</span></p>
                <p>Cena: <span id="productPrice">{item.price} Kč</span></p>
                <p>Počet: <span id="productAmount">{item.amount}</span></p>
                <button onClick={() => this.removeFromCart(item.itemID)}>Odebrat z košíku</button>
            </div>
        ));
    }
    

    

    



    render() {
        return(
            <>
                <Header />
                <div id="cart">
                    <h1>Pokladna</h1>
                    <div className="order">
                        <div className="product">
                            <h2>Vybraný Produkt</h2>
                            {this.renderCartItem()}
                        </div>
                    </div>
                    
                </div>
                <Footer />
            </>
        );
    }
}

export default Cart;
