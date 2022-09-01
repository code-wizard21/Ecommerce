import { Link, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const NavLink = ({ navLocation }) => {
    const location = useLocation().pathname;


    return (
        <Text display="flex">
            <Link href={`/${navLocation}`} py="2" w="100%" color={(location === `/${navLocation}`) ? "brand.900" : ""}  _hover={{ color: "brand.900" }}>
                {navLocation}
            </Link>
        </Text>
    )
}

export default NavLink;