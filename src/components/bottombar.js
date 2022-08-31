import { Badge, Flex, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { FaStoreAlt } from "react-icons/fa";
import { FiBell, FiHeart, FiHome, FiSearch } from "react-icons/fi"
import { useLocation } from "react-router-dom";
import SearchBar from "./searchbar";
import { useSelector } from "react-redux"


const MobileBottombar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation().pathname;
    const wishlist = useSelector((state) => state.data.wishlist);

    const active = {
        color: "rgb(228, 99, 13)",
        backgroundColor: "rgb(228, 90, 13, 0.1)"
    }

    return (
        <Flex justify="space-between" align="center" p="5px 12px" bgColor="white" borderColor="gray.100" w="100%" display={[ "flex", "flex", "none" ]} position="fixed" left="0" bottom="0" boxShadow="0 5px 10px black">

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Search</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SearchBar />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Text onClick={onOpen} p="15px 18px" fontSize="20px" borderRadius="5px" _hover={ active} style={ (location === "#")? active : { color: ""} } title="search"><FiSearch /></Text>

            <Link href="/shop" p="15px 18px" fontSize="20px" borderRadius="5px" _hover={ active} style={ (location === "/shop")? active  : { color: "" } } title="shop"><FaStoreAlt /></Link>
            <Link href="/" p="15px 18px" fontSize="20px" borderRadius="5px" _hover={ active} style={ (location === "/")? active : { color: ""} } title="home"><FiHome /></Link>
            <Link href="/" p="15px 18px" fontSize="20px" borderRadius="5px" _hover={ active} style={ (location === "/notifications")? active : { color: ""}} title="notifications">
                <FiBell />
            </Link>
            <Link href="/wishlist" p="15px 18px" fontSize="20px" borderRadius="5px" _hover={ active} style={ (location === "/wishlist")? active : { color: ""} } position="relative" title="wishlist">
                <FiHeart />
                <Badge colorScheme="red" position="absolute" top="0" right="-5px">{wishlist.length}</Badge>
            </Link>
        </Flex>
    )
}

export default MobileBottombar;