import "./Header.css"
import { Link } from "react-router-dom";




export default function Header() {
  
    return(
     
        <>
        <header>
        <div class="bar">
          Doprava <strong>zdarma</strong> při nákupu v hodnotě 1500 Kč
        </div>

        </header>

       
      


      <section class="top-nav">
        <div className="logo" >
        <img src="../img/logo.png" width="40px" height="40px" />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
        <ul class="menu">
          <li><Link to={"/"}>
            <a>Domov</a>
            </Link></li>
          <li><Link to={"/products"}>
            <a>Naše produkty</a>
            </Link></li>
          <li><Link to={"/about"}>
            <a>Co je to SHOCAFF?</a>
            </Link></li>
          <li><Link to={"/contacts"}>
            <a>Kontakty</a>
            </Link></li>
          <li><Link to={"/cart"}>
            <a>košík</a>
            </Link></li>
        </ul>
      </section>

     
      
        </>

        
     

    );

    
};
