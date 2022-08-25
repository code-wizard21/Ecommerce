import { Flex, Link, Text } from "@chakra-ui/react";
import { FaBars, FaSearch, FaShoppingBag, FaShoppingBasket, FaUser } from "react-icons/fa";

const Topbar = () => {
    return (
        <nav>
            <Flex justify="space-between" align="center" shadow="base" px={"10%"} py="15px">
                <Flex w="10%">
                    <Link href="/" bgColor="gray.100" p="2" borderRadius="30px">
                        <FaSearch />
                    </Link>
                </Flex>

                <Flex flexDirection="column" justify="center" align="center" color="orange.300">
                    <FaShoppingBag/>
                    <Text fontWeight={500} color="black">Ecommerce</Text>
                </Flex>

                <Flex>
                    <Link href="/" bgColor="gray.100" p="2" borderRadius="30px" me={6}>
                        <FaShoppingBasket />
                    </Link>
                    
                    <Link href="/" bgColor="gray.100" p="2" borderRadius="30px" me={6}>
                        <FaUser />
                    </Link>
                    
                    <Link href="/" p="2" borderRadius="5px">
                        <FaBars />
                    </Link>
                </Flex>
            </Flex>
        </nav>
    )
}

export default Topbar;