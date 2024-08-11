import "./AdminPage.css";
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";

const cookies = new Cookies();

const AdminPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        amount: '',
        weight: '',
        content: '',
        caffeine: '',
        flavor: '',
        strength: '',
        size: '',
        img: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const authToken = cookies.get('authToken');
        
        axios.post("http://localhost:7070/item/add/"+cookies.get("authToken"), formData, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(response => {
            alert('Item created successfully!');
            console.log(response.data);
         
            setFormData({
                name: '',
                description: '',
                price: '',
                amount: '',
                weight: '',
                content: '',
                caffeine: '',
                flavor: '',
                strength: '',
                size: '',
                img: ''
            });
        })
        .catch(error => {
            console.error('Error creating item:', error);
            alert('Failed to create item!');
        });
    };

    return (
        <>
        <Header></Header>
       <div id="ap">
        <div className="formular">
            <h1>Přidávání produktů</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required />

                <label>Price:</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />

                <label>Amount:</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

                <label>Weight:</label>
                <input type="text" name="weight" value={formData.weight} onChange={handleChange} />

                <label>Content:</label>
                <input type="text" name="content" value={formData.content} onChange={handleChange} />

                <label>Caffeine:</label>
                <input type="text" name="caffeine" value={formData.caffeine} onChange={handleChange} />

                <label>Flavor:</label>
                <input type="text" name="flavor" value={formData.flavor} onChange={handleChange} />

                <label>Strength:</label>
                <input type="text" name="strength" value={formData.strength} onChange={handleChange} />

                <label>Size:</label>
                <input type="text" name="size" value={formData.size} onChange={handleChange} />

                <label>Image URL:</label>
                <input type="text" name="img" value={formData.img} onChange={handleChange} />

                <button type="submit">Create Item</button>
            </form>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default AdminPage;