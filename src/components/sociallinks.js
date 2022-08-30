import { Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"

const SocialLinks = () => {
    return (
        <Flex py="4">
            <Link href="https://facebook.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "rgb(228, 99, 13)" }}>
                <FaFacebook />
            </Link>
            <Link href="https://twitter.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "rgb(228, 99, 13)" }}>
                <FaTwitter />
            </Link>
            <Link href="https://instagram.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "rgb(228, 99, 13)" }}>
                <FaInstagram />
            </Link>
            <Link href="https://youtube.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "rgb(228, 99, 13)" }}>
                <FaYoutube />
            </Link>
            <Link href="https://linkedin.com" p="2" bgColor="gray.600" color="white" me="2" borderRadius="2px" _hover={{ bgColor: "rgb(228, 99, 13)" }}>
                <FaLinkedin />
            </Link>
        </Flex>
    )
}

export default SocialLinks;