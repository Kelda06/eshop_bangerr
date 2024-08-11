import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
    const [isAdmin, setIsAdmin] = useState(false); n

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        axios
            .put("http://localhost:7070/user/login", { email, password })
            .then((response) => {
                console.log("Přihlášení úspěšné:", response.data);

                cookies.set("authToken", response.data.authToken, { path: "/" });

              
                axios
                    .get("http://localhost:7070/user/"+cookies.get("authToken"), {
                        body: {
                            Authorization: `Bearer ${response.data.authToken}`,
                        },
                    })
                    .then((userResponse) => {
                        if (userResponse.data.role === "admin") {
                            setIsAdmin(true); 
                           
                        }
                    })
                    .catch((error) => {
                        console.error("Chyba při získávání role uživatele:", error);
                    });
            })
            .catch((error) => {
                console.error("Chyba při přihlašování:", error);
            });
    };

    return (
        <>
            <Header />
            <div id="login">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h1>Přihlášení</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Zadejte email"
                            required
                        />

                        <label htmlFor="password">Heslo:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Zadejte heslo"
                            required
                        />

                        <input type="submit" value="Přihlásit se" />
                    </form>
                    <Link to={"/registration"}>
                        <p>Registrace</p>
                    </Link>

                    {/* Zobrazit tlačítko Admin Page pokud je uživatel admin */}
                    {isAdmin && (
                        <Link to="/admin">
                            <button type="button">Admin Page</button>
                        </Link>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}