import { Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"

const SocialLinks = () => {
    return (
        <Flex py="4">
            <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                <FaFacebook />
            </Link>
            <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                <FaTwitter />
            </Link>
            <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                <FaInstagram />
            </Link>
            <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                <FaYoutube />
            </Link>
            <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "orange.300" }}>
                <FaLinkedin />
            </Link>
        </Flex>
    )
}

export default SocialLinks;