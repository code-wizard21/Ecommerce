import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NavLink from "./navLink";
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
                    
                    <NavLink navLocation={"home"} />
                    <NavLink navLocation={"shop"} />
                    <NavLink navLocation={"cart"} />
                    <NavLink navLocation={"wishlist"} />

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" py="3">SERVICES</Text>
                    
                    <NavLink navLocation={"orders"} />
                    <NavLink navLocation={"history"} />
                    <NavLink navLocation={"discounts/rewards"} />
                    <NavLink navLocation={"profile"} />
                    <NavLink navLocation={"settings"} />

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" py="3">SUPPORTS</Text>
                    <NavLink navLocation={"notifications"} />
                    <NavLink navLocation={"customer support"} />
                    <NavLink navLocation={"product return"} />
                    <NavLink navLocation={"forum"} />
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