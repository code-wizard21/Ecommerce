import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer>
            <Flex justify="space-between" flexWrap="wrap" p="5% 10%" fontSize="14px" bgColor="gray.200">
                <Box  w={[ "100%", "50%", "30%", "23%" ]}>
                    <Heading>Motara</Heading>
                    <p>Home of Unique furnitures. </p>
                    <Flex py="4">
                        <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                            <FaFacebook />
                        </Link>
                        <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                            <FaTwitter />
                        </Link>
                        <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                            <FaInstagram />
                        </Link>
                        <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                            <FaYoutube />
                        </Link>
                        <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                            <FaLinkedin />
                        </Link>
                    </Flex>
                </Box>

                <Box w={[ "100%", "50%", "30%", "23%" ]}>
                    <Text fontWeight="700" py="3" px="2">PAGES</Text>
                    
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Home
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            About
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Shop
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Wishlist
                        </Link>
                    </Text>

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]}>
                    <Text fontWeight="700" py="3" px="2">SERVICES</Text>
                    
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Orders
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            History
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Discounts/Rewards
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Profile
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Settings
                        </Link>
                    </Text>

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]}>
                    <Text fontWeight="700" py="3" px="2">SUPPORTS</Text>
                    
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Notifications
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Customer support
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Product return
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" w="100%" _hover={{ color: "orange.300" }}>
                            Forum
                        </Link>
                    </Text>

                </Box>
            </Flex>

            <Flex justify="space-between" p="20px 10%" bgColor="gray.400"color="white" fontSize="14px">
                <Text>Designed by Abel</Text>
                <Text>Copyright &copy; { new Date().getFullYear() }</Text>
            </Flex>
        </footer>
    )
}

export default Footer;