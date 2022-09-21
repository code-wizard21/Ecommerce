import { Box, Link, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const NavLink = ({ navLocation, children }) => {
    const location = useLocation().pathname;


    return (
        <Box display="flex">
            <Link href={`/${navLocation}`} py="2" display="flex" alignItems="center" w="100%" color={(location === `/${navLocation}`) ? "brand.900" : ""}  _hover={{ color: "brand.900" }}>
                <Text me="3" color="gray.400" >{children}</Text>
                {navLocation}
            </Link>
        </Box>
    )
}

export default NavLink;