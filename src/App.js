import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compponets/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCatagary from "./Pages/ShopCatagary";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSinup from "./Pages/LoginSinup";
import Footer from "./Compponets/Footer/Footer";
import men_banner from './Compponets/Assets/banner_mens.png'
import women_banner from './Compponets/Assets/banner_women.png'
import kids_banner from './Compponets/Assets/banner_kids.png'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCatagary banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCatagary banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCatagary banner={kids_banner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/login" element={<LoginSinup/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
