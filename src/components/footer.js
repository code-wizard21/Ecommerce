import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import SocialLinks from "./sociallinks";

const Footer = () => {
    return (
        <footer>
            <Flex justify="space-between" flexWrap="wrap" py="5%" px={[ "20px", "20px", "10%" ]} fontSize="14px" bgColor="gray.100">
                <Box  w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Heading>Motara</Heading>
                    <p>Home of Unique furnitures. </p>

                    <SocialLinks />
                </Box>

                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" py="3">PAGES</Text>
                    
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Home
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            About
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Shop
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Wishlist
                        </Link>
                    </Text>

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" py="3">SERVICES</Text>
                    
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Orders
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            History
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Discounts/Rewards
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Profile
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Settings
                        </Link>
                    </Text>

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" py="3">SUPPORTS</Text>
                    
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Notifications
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Customer support
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Product return
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "rgb(228, 99, 13)" }}>
                            Forum
                        </Link>
                    </Text>

                </Box>
            </Flex>

            <Flex mb={[ "12%", "12%", 0 ]} justify="space-between" py="20px" px={[ "20px", "20px", "10%" ]} bgColor="gray.600"color="white" fontSize="14px">
                <Text>Designed by Abel</Text>
                <Text>Copyright &copy; { new Date().getFullYear() }</Text>
            </Flex>
        </footer>
    )
}

export default Footer;