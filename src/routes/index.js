import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import MobileBottombar from "../components/bottombar";
import Topbar from "../components/topbar";
import Home from "../views/index";
import Login from "../views/login";
import Register from "../views/register";
import Shop from "../views/shop";
import Cart from "../views/cart";
import Checkout from "../views/checkout";
import Wishlist from "../views/wishlist";
import SingleProduct from "../views/singleProduct";


const RoutesProvider = () => {
    return ( 
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/shop" exact element={<Shop />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/checkout" exact element={<Checkout />} />
                <Route path="/wishlist" exact element={<Wishlist />} />
                <Route path="/singleProduct" exact element={<SingleProduct />} />
            </Routes>
            <MobileBottombar />
            <Footer />
        </BrowserRouter>
     )
}

export default RoutesProvider;