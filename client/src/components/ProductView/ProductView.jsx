import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:7070/item/${id}`)
            .then(response => setItem(response.data))
            .catch(error => console.error('Error loading item:', error));
    }, [id]);

    if (!item) {
        return <p>Loading item...</p>;
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
        <Header></Header>

<div id="Peach">


 <div className="container">
   <div className="pic">
     <img
       src="../img/peach.png"
       
       alt="peach"
     ></img>
   </div>
   <div className="buy">
     <p className="name">
       <strong>{item.name}</strong>
     </p>

     <div className="container2">
       <div className="desc">
         <div className="desc1"><li>Zbrusu nový kofeinový sáček vás nabudí kdykoliv!</li></div>
         <li>Svěží chut {item.flavor} kterou si zamilujete</li>
         <li>Balení obsahuje {item.content} o síle {item.caffeine} mg/g</li>
       </div>

     <div className="container2_1">

       <div className="kofein">
       <img
       src="../img/kofein.png"></img>
       </div>

       <div className="order">
         <div className="price">
           <strong>
             <h1>{item.price} Kč</h1>
           </strong>
         </div>
         <br />
         <div className="stav">
         <p><strong>Skladem:</strong> {item.enabled ? "Ano" : "Ne"}</p>
         </div>
         <button onClick={() => handleAddToCart(item._id)} type="button" className="CartButton">
                                            Do košíku
                                        </button>
       </div>
       </div>
     </div>
   </div>
 </div>

 <div className="line"></div>

 <div className="container3">
   <div className="info">
     <p>
       <h1>Informace o produktu</h1>
     </p>
     <div className="text">
       <br></br>
       <br></br>
       <p className="par">
        Obsah puku:  <span className="pargap">{item.content} po 0,76g</span>
       </p>
       <br></br>
       
       
       <p className="par">
        Obsah kofeinu:  <span className="pargap">{item.caffeine}mg/g</span>
       </p>
       <br></br>
       <p className="par">
           Příchut: <span className="pargap">{item.flavor}</span>
         </p>
     
     </div>
   </div>
   <div className="parameters">
     <p>
       <h1>Parametry produktu</h1>
       <div className="text">
         <br></br>
         <br></br>
         <p className="par">
           Hmotnost: <span className="pargap">{item.weight}g</span>
         </p>
         <br></br>
         <p className="par">
           Síla: <span className="pargap">{item.strength}/10</span>
         </p>
         <br></br>
         <p className="par">
           Velikost sáčku: <span className="pargap">{item.size}</span>
         </p>
         <br></br>
        
       </div>
     </p>
   </div>
 </div>

 <div className="container4">
   <div className="manual">
     <div className="man_text">
       <h2>Jak používat SHOCAFF</h2>
     </div>
     <div className="manual_pic">
       <img src="../img/pouziti.jpeg" width="100%" alt="pouziti"></img>
     </div>
   </div>

   <div className="help">
     <div className="help_t">
       <h2>Potřebuješ poradit?</h2>
     </div>
     <br></br>
     <br></br>
     <div className="help_text">
     <ul>
       <li>Tel: 725 828 088 ( Po - Pá: 7:00 - 16:00)</li>
       <br />
       <li>E-mail: info@energain.cz</li>
     </ul>
     </div>
   </div>
 </div>

 </div>

 <Footer></Footer>
 
     
        </>
    );
};

export default ItemDetail;