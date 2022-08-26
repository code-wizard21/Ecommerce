import { Flex, Link } from "@chakra-ui/react";
import { FiBell, FiHeart, FiHome, FiShoppingCart, FiUser } from "react-icons/fi"

const MobileBottombar = () => {
    return (
        <Flex justify="space-between" align="center" p="5px 10px" bgColor="white" borderColor="gray.100" w="100%" display={[ "flex", "flex", "none" ]} position="fixed" left="0" bottom="0" shadow="dark-lg">
            <Link href="/" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }}><FiUser /></Link>
            <Link href="/" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }}><FiShoppingCart /></Link>
            <Link href="/" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }} color="white" bgColor="orange.300"><FiHome /></Link>
            <Link href="/" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }}><FiBell /></Link>
            <Link href="/" p="15px 20px" fontSize="20px" borderRadius="5px" _hover={{ bgColor: "orange.300", color: "white" }}><FiHeart /></Link>
        </Flex>
    )
}

export default MobileBottombar;