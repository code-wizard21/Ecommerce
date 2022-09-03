import { Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";


const BottomNavLink = ({ link, activeLocations, children }) => {
    const location = useLocation().pathname;

    const active = "brand.900"

    return (
        <Link 
            href={link}
            p="15px 18px" 
            fontSize="20px" 
            borderRadius="5px" 
            _hover={{color: active}} 
            color={ ( activeLocations.indexOf(location) !== -1 ) ? active  : "" } 
            title="shop"
            position="relative"
        >
            { children }
        
        </Link>
    )
}

export default BottomNavLink;