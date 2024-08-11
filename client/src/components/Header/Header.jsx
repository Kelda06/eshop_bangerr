import "./Header.css"
import { Link } from "react-router-dom";



const NavBar = ({ isAdmin }) => {
  return (
      <nav>
          <Link to="/">Domů</Link>
          {/* Zobrazit tlačítko pro admin stránku pouze pokud je uživatel admin */}
          {isAdmin && <Link to="/admin">Admin Page</Link>}
      </nav>
  );
};



export default function Header() {
  
    return(
     
        <>

        <div id="header">

        
        <header>
        <div className="bar">
          Doprava <strong>zdarma</strong> při nákupu v hodnotě 1500 Kč
        </div>

        </header>

       
      


      <section className="top-nav">
        <div className="logo" >
        <img src="../img/logo.png" width="40px" height="40px" />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' for="menu-toggle">
        <div className='menu-button'></div>
      </label>
        <ul className="menu">
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
            <li><Link to={"/login"}>
            <a>Login</a>
            </Link></li>
          <li><Link to={"/cart"}>
            <a>Košík</a>
            </Link></li>
        </ul>
      </section>

     
      </div>
        </>

        
     

    );

    
};

