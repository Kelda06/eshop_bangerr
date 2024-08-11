import "./Product.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'; 

const cookies = new Cookies();

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        axios.get('http://localhost:7070/item')
            .then(response => {
                setItems(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message); 
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading items...</p>; 
    }

    if (error) {
        return <p>Error loading items: {error}</p>; 
    }

    const handleAddToCart = (itemID) => {
        axios.put(`http://localhost:7070/cart/add/${cookies.get("authToken")}`, { itemID, amount: "1" })
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
            <div id="pr">
                <div className="item-list">
                    {items.map(item => (
                        <div className="container" key={item._id}>
                            <div className="p">
                                
                                <Link to={`/product/${item._id}`}>
                                {item.img && <img src={item.img} alt={item.name} style={{ width: '300px', height: '300px' }} />}
                                </Link>
                            </div>
                            <div className="name">
                                <h3>{item.name}</h3>
                            </div>
                            <br />
                            <div className="container2">
                                <div className="container3">
                                    <div className="price">
                                        <strong>
                                            <p>{item.price} Kč</p>
                                        </strong>
                                    </div>
                                    <div className="cart">
                                        <div className="stav">
                                            <strong>
                                                <p><strong>Skladem:</strong> {item.enabled ? "Ano" : "Ne"}</p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="container4">
                                    <div className="CartButton">
                                        <button onClick={() => handleAddToCart(item._id)} type="button" className="CartButton">
                                            Do košíku
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ItemList;