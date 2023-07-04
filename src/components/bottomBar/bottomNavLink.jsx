import { Link, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";


const BottomNavLink = ({ link, activeLocations, children }) => {
    const location = useLocation().pathname;

    const active = "brand.900"

    return (
        <Link 
            href={`/${link}`}
            p="15px" 
            fontSize="20px" 
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
            textAlign="center"
            _hover={{color: active}} 
            color={ ( activeLocations.indexOf(location) !== -1 ) ? active  : "" } 
            title="shop"
            position="relative"
        >
            { children }
            <Text overflow="hidden" fontSize="10px" marginTop="7px" h={( activeLocations.indexOf(location) !== -1 ) ? "25px"  : "0"}>{link !== "" ? link : "Home"}</Text>
        </Link>
    )
}

export default BottomNavLink;