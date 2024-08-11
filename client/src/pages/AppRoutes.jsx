import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";

import Cart from "./Cart/Cart";
import Contacts from "./Contacts/Contacts";
import Grape from "./Grape/Grape";
import Lemon from "./Lemon/Lemon";
import Mint from "./Mint/Mint";
import Peach from "./Peach/Peach"
import Products from "./Products/Products";
import Header from "../components/Header/Header";
import Footer from "../components/Header/Footer/Footer";
import ProductsPeach from "../components/Header/ProductsPeach/ProductsPeach"
import ProductsGrape from "../components/Header/ProductsGrape/ProductsGrape";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Product from "../components/Product/Product";
import ProductView from "../components/ProductView/ProductView";





export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/grape" element={<Grape />} />
          <Route path="/lemon" element={<Lemon />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/peach" element={<Peach />} />
          <Route path="/products" element={<Products />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/productsPeach" element={<ProductsPeach />} />
          <Route path="/productsGrape" element={<ProductsGrape />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductView />} />
          
          

        </Routes>
      </BrowserRouter>
    </>
  );
}
