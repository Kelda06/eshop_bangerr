import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import CatCreateForm from "./CatCreateForm/CatCreateForm";
import CatUpdateForm from "./CatUpdateForm/CatUpdateForm";
import CatView from "./CatView/CatView";
import CatList from "./CatList/CatList";
import CreatedCat from "./CatCreateForm/CreatedCat";
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
import Cartjs from "../pages/Cart/Cartjs"



export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/createcat" element={<CatCreateForm />} />
          <Route path="/updatecat/:id" element={<CatUpdateForm />} />
          <Route path="/cat/:id" element={<CatView />} />
          <Route path="/cats" element={<CatList />} />
          <Route path="/createdcat/:id" element={<CreatedCat />} />
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
          <Route path="/cartjs" element={<Cartjs/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
