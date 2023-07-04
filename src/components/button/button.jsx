import { Link } from "@chakra-ui/react"

const Button = ({ text, href }) => {
    return (
        <Link 
            href={href} 
            p="12px" 
            px="6"
            borderRadius="2"
            fontSize="14px" 
            bg="brand.900"
            color="white"
            title={text}
            _hover={{ bg: "brand.800" }}
        >
            { text }
            
        </Link>
    )
}

export default Button;