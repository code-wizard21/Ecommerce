import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import Footer from "../components/footer/footer";
import MobileBottombar from "../components/bottomBar/bottombar";
import Topbar from "../components/topbar/topbar";
import { useSelector } from "react-redux";
import Loader from "../components/loader/loader";

const Home = lazy(() => import("../views/home/index"));
const Login = lazy(() => import("../views/login/login"));
const Register = lazy(() => import("../views/register/register"));
const Shop = lazy(() => import("../views/shop/shop"));
const Cart = lazy(() => import("../views/cart/cart"));
const Checkout = lazy(() => import("../views/checkout/checkout"));
const Wishlist = lazy(() => import("../views/wishlist/wishlist"));
const Dashboard = lazy(() => import("../views/dashboard/dashboard"));
const SingleProduct = lazy(() => import("../views/singleProduct/singleProduct"));
const Search = lazy(() => import("../views/search/search"));
const ErrorPage  = lazy(() => import("../views/404/404"));


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
                    <Route path="/Search" exact element={<Search />} />
                    <Route path="*" exact element={<ErrorPage />} />

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