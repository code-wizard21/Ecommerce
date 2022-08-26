import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import MobileBottombar from "../components/bottombar";
import Topbar from "../components/topbar";
import Home from "../views/index";
import Login from "../views/login";
import Register from "../views/register";


const RoutesProvider = () => {
    return ( 
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
            </Routes>
            <MobileBottombar />
            <Footer />
        </BrowserRouter>
     )
}

export default RoutesProvider;