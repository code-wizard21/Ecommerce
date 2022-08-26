import { Flex, Link, Text } from "@chakra-ui/react";
import { FaShoppingBasket, FaShoppingCart, FaUser } from "react-icons/fa";
import Navbar from "./navbar";

const Topbar = () => {
    return (
        <nav>
            <Flex justify="space-between" align="center" shadow="base" px={[null, "0px", "5%", "10%"]} py="1.5">

                <Flex align="center" color="orange.300" ps={[ "20px", null ]}>
                    <FaShoppingCart/>
                    <Text fontWeight={500} color="black">Motara</Text>
                </Flex>

                <Flex align="center" justify="flex-end">
                    <Link href="/" p="3" me={6} _hover={{ color: "orange.300" }}>
                        <FaShoppingBasket />
                    </Link>
                    
                    <Link href="/login" p="3" me={6} _hover={{ color: "orange.300" }}>
                        <FaUser />
                    </Link>
                    
                    <Navbar />
                </Flex>
            </Flex>
        </nav>
    )
}

export default Topbar;