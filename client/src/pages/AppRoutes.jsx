import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";

import Cart from "./Cart/Cart";
import Contacts from "./Contacts/Contacts";



import Products from "./Products/Products";
import Header from "../components/Header/Header";
import Footer from "../components/Header/Footer/Footer";


import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Product from "../components/Product/Product";
import ProductView from "../components/ProductView/ProductView";
import AdminPage from "./AdminPage/AdminPage";






export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
      
         
          <Route path="/products" element={<Products />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        
         
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/adminpage" element={<AdminPage />} />
         
          
          

        </Routes>
      </BrowserRouter>
    </>
  );
}
