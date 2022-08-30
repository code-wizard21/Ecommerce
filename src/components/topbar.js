import { Box, Flex, Link } from "@chakra-ui/react";
import { FiShoppingBag, FiShoppingCart, FiUser } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import SearchBar from "./searchbar";

const Topbar = () => {
    const location = useLocation().pathname;
    const active = {
        color: "rgb(228, 99, 13)"
    }

    return (
        <nav>
            <Flex justify="space-between" align="center" shadow="base" px={[null, "0px", "5%", "10%"]} py="1.5">

                <Flex align="center" w="15%" color="rgb(228, 99, 13)" ps={[ "20px", "20px", 0 ]}>
                    <FiShoppingBag/>
                    <Link href="/" fontWeight={500} color="black" ms="2" title="logo">Motara</Link>
                </Flex>

                <Box flex="1" display={[ "none", "none", "flex" ]}>
                    <SearchBar />
                </Box>

                <Flex align="center" justify="flex-end" w="22%">
                    <Link href="/cart" p="2" me={3} style={ (location === "/cart") ? active : {color:""} } _hover={{ color: "rgb(228, 99, 13)" }} title="cart">
                        <FiShoppingCart />
                    </Link>
                    
                    <Link href="/login" p="2" me={6} style={ (location === "/login" || location === "/register") ? active : {color:""} } _hover={{ color: "rgb(228, 99, 13)" }} title="account">
                        <FiUser />
                    </Link>
                    
                    <Navbar />
                </Flex>
            </Flex>
        </nav>
    )
}

export default Topbar;