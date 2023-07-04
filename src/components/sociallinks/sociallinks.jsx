import { Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"

const SocialLinks = () => {
    const links = [
        { to: "https://facebook.com", icon: <FaFacebook /> },
        { to: "https://twitter.com", icon: <FaTwitter /> },
        { to: "https://linkedin.com", icon: <FaLinkedin /> },
    ]

    return (
        <Flex py="4">
            {
                links.map((link,i) => (
                    <Link key={i} href={link.to} p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "brand.900" }}>
                        {link.icon}
                    </Link>
                ))
            }
        </Flex>
    )
}

export default SocialLinks;