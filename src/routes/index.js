import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Footer from "../components/footer";
import MobileBottombar from "../components/bottomBar/bottombar";
import Topbar from "../components/topbar";
import Home from "../views/index";
import Login from "../views/login";
import Register from "../views/register";
import Shop from "../views/shop";
import Cart from "../views/cart";
import Checkout from "../views/checkout";
import Wishlist from "../views/wishlist";
import SingleProduct from "../views/singleProduct";
import Dashboard from "../views/dashboard";


const RoutesProvider = () => {
    return ( 
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/Home" exact element={<Navigate to="/" replace />} />
                <Route path="/Login" exact element={<Login />} />
                <Route path="/Register" exact element={<Register />} />
                <Route path="/Shop" exact element={<Shop />} />
                <Route path="/Cart" exact element={<Cart />} />
                <Route path="/Checkout" exact element={<Checkout />} />
                <Route path="/Wishlist" exact element={<Wishlist />} />
                <Route path="/SingleProduct" exact element={<SingleProduct />} />
                <Route path="/Dashboard" exact element={<Dashboard />} />
            </Routes>

            <MobileBottombar />
            <Footer />
        </BrowserRouter>
     )
}

export default RoutesProvider;