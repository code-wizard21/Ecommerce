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
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Home
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            About
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Shop
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Wishlist
                        </Link>
                    </Text>

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" py="3">SERVICES</Text>
                    
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Orders
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            History
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Discounts/Rewards
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Profile
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Settings
                        </Link>
                    </Text>

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" py="3">SUPPORTS</Text>
                    
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Notifications
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Customer support
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Product return
                        </Link>
                    </Text>
                    <Text display="flex">
                        <Link href="/" p="2" ps="0" w="100%" _hover={{ color: "orange.300" }}>
                            Forum
                        </Link>
                    </Text>

                </Box>
            </Flex>

            <Flex mb={[ "10%", "10%", 0 ]} justify="space-between" p="20px 10%" bgColor="gray.400"color="white" fontSize="14px">
                <Text>Designed by Abel</Text>
                <Text>Copyright &copy; { new Date().getFullYear() }</Text>
            </Flex>
        </footer>
    )
}

export default Footer;