import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import Footer from "../components/footer";
import MobileBottombar from "../components/bottomBar/bottombar";
import Topbar from "../components/topbar";
import { useSelector } from "react-redux";
import Loader from "../components/loader/loader";

const Home = lazy(() => import("../views/index"));
const Login = lazy(() => import("../views/login"));
const Register = lazy(() => import("../views/register"));
const Shop = lazy(() => import("../views/shop"));
const Cart = lazy(() => import("../views/cart"));
const Checkout = lazy(() => import("../views/checkout"));
const Wishlist = lazy(() => import("../views/wishlist"));
const Dashboard = lazy(() => import("../views/dashboard"));
const SingleProduct = lazy(() => import("../views/singleProduct"));


const RoutesProvider = () => {
    const user = useSelector(state => state.data.user);

    return ( 
        <BrowserRouter>
            <Topbar />
            <Suspense fallback={<Loader />}>
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

                    <Route path="/Logout" exact element={<Navigate to="/Login" replace />} />
                    <Route path={"/Dashboard"} exact element={user ? <Dashboard /> : <Navigate to="/Login" replace />} />
                </Routes>
            </Suspense>
            <MobileBottombar />
            <Footer />
        </BrowserRouter>
     )
}

export default RoutesProvider;