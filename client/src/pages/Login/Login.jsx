import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

export default function Login() {
    return(

        <>
        <Header></Header>

        <div id="login">
            <form>
            <h1>Přihlášení</h1>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Zadejte email" required/>
            
            <label for="password">Heslo:</label>
            <input type="password" id="password" name="password" placeholder="Zadejte heslo" required/>

            <input type="submit" value="Přihlásit se"></input>
            </form>

           

        </div>



        <Footer></Footer>
        </>

    );
    
}