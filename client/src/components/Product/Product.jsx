import "./Product.css";

import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Product({ id, name, description, price, img, onAddToCart }) {
    return (
        <div className="product">
            <img src={img} alt={name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">{price} Kč</p>
                <button className="product-add-to-cart" onClick={() => onAddToCart(id)}>
                    Přidat do košíku
                </button>
            </div>
        </div>
    );
}

export default Product;