import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NavLink from "../navbar/navLink";
import SocialLinks from "../sociallinks/sociallinks";

const Footer = () => {
    return (
        <footer>
            <Flex justify="space-between" flexWrap="wrap" py="5%" px={[ "10px", "20px", "10%" ]} fontSize="14px" bgColor="gray.100">

                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" p="3">PAGES</Text>
                    
                    <NavLink navlocation={"Home"} />
                    <NavLink navlocation={"Shop"} />
                    <NavLink navlocation={"Cart"} />
                    <NavLink navlocation={"Wishlist"} />

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" p="3">SERVICES</Text>
                    
                    <NavLink navlocation={"History"} />
                    <NavLink navlocation={"Rewards"} />
                    <NavLink navlocation={"Profile"} />
                    <NavLink navlocation={"Settings"} />

                </Box>

                
                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3">
                    <Text fontWeight="700" p="3">SUPPORTS</Text>
                    <NavLink navlocation={"Notifications"} />
                    <NavLink navlocation={"Support"} />
                    <NavLink navlocation={"Returns"} />
                    <NavLink navlocation={"Forum"} />
                </Box>

                <Box w={[ "100%", "50%", "30%", "23%" ]} my="3" px="3">
                    <SocialLinks />
                    <Text>Lagos, Nigeria</Text>
                    <Link href="mailto:support@motara.com">Support@motara.com</Link>
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