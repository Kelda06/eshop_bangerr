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
            <Link to={"/cart"}>
            <a>košík</a>
            </Link>
            
        </div>
      </nav>
        </>

    );
    
};