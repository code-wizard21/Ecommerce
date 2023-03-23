import { Badge, Box, Flex, Image, Link } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import SearchBar from "./searchbar";
import { useSelector } from "react-redux";
import logo from "../assets/imgs/logo.png"
import { useEffect } from "react";

const Topbar = () => {
    const location = useLocation().pathname;
    const cart = useSelector((state) => state.data.cart)
    const user = useSelector((state) => state.data.user)
    const active = {
        color: "brand.900"
    }

    useEffect(() => {
        console.log(user)
    })


    return (
        <nav>
            <Flex justify="space-between" align="center" shadow="base" px={[null, "0px", "5%", "10%"]} py="2.5">

                <Flex 
                    align="center" 
                    minW="15%" 
                    fontSize="18px"  
                    color="brand.900" 
                    ps={[ "20px", "20px", 0 ]}
                >
                    <Image src={logo} width="27px" alt="logo"/>
                    <Link href="/" fontWeight={600} color="black" ms="2" title="logo">Motara</Link>
                </Flex>

                <Box flex="1" display={[ "none", "none", "flex" ]}>
                    <SearchBar />
                </Box>

                <Flex align="center" justify="flex-end" w="22%">
                    <Link 
                        href="/Cart"
                        p="2" 
                        fontSize="18px" 
                        display={[ "none", "none", "flex" ]} 
                        me={6} position="relative" 
                        style={ (location === "/Cart") ? active : {color:""} } 
                        _hover={{ color: "brand.900" }} title="cart"
                    >
                        <FiShoppingCart /><Badge color="white" bgColor="brand.900" position="absolute" top="0" right="-5px">{cart.length}</Badge>
                    </Link>
                    
                    <Link 
                        href={user.email ? "/dashboard" : "/Login"} 
                        p="2" 
                        px="6"
                        borderRadius="5"
                        fontSize="14px" 
                        bg="brand.900"
                        color="white"
                        mx={4} 
                        style={ (location === "/Login" || location === "/Register") ? active : {color:""} } 
                        title="account"
                    >
                        { (user.email) ? "Dashboard" : "Login" }
                        
                    </Link>
                    
                    <Navbar />
                </Flex>
            </Flex>
        </nav>
    )
}

export default Topbar;