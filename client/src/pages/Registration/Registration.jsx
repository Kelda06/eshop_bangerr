import React, { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Registration(){
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:7070/user/register', formData);
            console.log(response.data); 

            
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return(
        <>
        <Header></Header>
        <div id="registration">
        
        <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h1>Registrace</h1>
                        <label htmlFor="firstName">Jméno:</label>
                        <input type="text" id="fname" name="fname" placeholder="Zadejte své jméno" value={formData.fname} onChange={handleChange} required />

                        <label htmlFor="lastName">Příjmení:</label>
                        <input type="text" id="lname" name="lname" placeholder="Zadejte své příjmení" value={formData.lname} onChange={handleChange} required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Zadejte email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="password">Heslo:</label>
                        <input type="password" id="password" name="password" placeholder="Zadejte heslo" value={formData.password} onChange={handleChange} required />

                        <input type="submit" value="Register" />
                    </form>
                </div>
    
    </div>
        
        <Footer></Footer>
        </>
    )
}