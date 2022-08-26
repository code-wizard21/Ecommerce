import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Topbar from "../components/topbar";
import Home from "../views";


const RoutesProvider = () => {
    return ( 
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
     )
}

export default RoutesProvider;