import { Avatar, Badge, Box, Flex, Image, Link } from "@chakra-ui/react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import SearchBar from "./searchbar";
import { useSelector } from "react-redux";
import logo from "../assets/imgs/logo.png"

const Topbar = () => {
    const location = useLocation().pathname;
    const cart = useSelector((state) => state.data.cart)
    const user = useSelector((state) => state.data.user)
    const active = {
        color: "brand.900"
    }


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
                        href={(user === null || user === undefined) ? "/Login" : "/Dashboard"} 
                        p="2" 
                        fontSize="18px" 
                        me={6} 
                        style={ (location === "/Login" || location === "/Register") ? active : {color:""} } 
                        _hover={{ color: "brand.900" }} title="account"
                    >
                        { (user === null || user === undefined) ? <FiUser /> : <Avatar size={"sm"} colorScheme="green" /> }
                        
                    </Link>
                    
                    <Navbar />
                </Flex>
            </Flex>
        </nav>
    )
}

export default Topbar;