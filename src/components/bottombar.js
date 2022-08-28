import { Flex, Link } from "@chakra-ui/react";
import { FaStoreAlt } from "react-icons/fa";
import { FiBell, FiHeart, FiHome, FiUser } from "react-icons/fi"
import { useLocation } from "react-router-dom";


const MobileBottombar = () => {
    const location = useLocation().pathname;

    const active = {
        color: "white",
        backgroundColor: "#f6ad55"
    }

    return (
        <Flex justify="space-between" align="center" p="5px 10px" bgColor="white" borderColor="gray.100" w="100%" display={[ "flex", "flex", "none" ]} position="fixed" left="0" bottom="0" boxShadow="0 5px 10px black">
            <Link href="/login" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }} style={ (location === "/login" || location === "/register" )? active : { color: ""} }><FiUser /></Link>
            <Link href="/shop" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }} style={ (location === "/shop")? active  : { color: "" } }><FaStoreAlt /></Link>
            <Link href="/" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }} style={ (location === "/")? active : { color: ""} }><FiHome /></Link>
            <Link href="/" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }} style={ (location === "/notifications")? active : { color: ""}}><FiBell /></Link>
            <Link href="/" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }} style={ (location === "/wishlist")? active : { color: ""} }><FiHeart /></Link>
        </Flex>
    )
}

export default MobileBottombar;