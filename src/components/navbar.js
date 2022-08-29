import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Link, Text, useDisclosure, Box } from "@chakra-ui/react"
import { useRef } from "react"
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SearchBar from "./searchbar";
import SocialLinks from "./sociallinks";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const location = useLocation().pathname;

    return(
        <>
            <Button href="/" p="2" me={[ "7px", "5px", 0 ]} bgColor="white" border="none" onClick={onOpen}>
                <FaBars />
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton py="4" px="5" m="3" border="1px" borderColor="gray.100" borderRadius="0" />
                    <DrawerHeader  m="2">Motara Furnitures</DrawerHeader>
                    <DrawerBody fontSize="14px">

                        <SearchBar />

                        <Text display="flex" mt="3">
                            <Link href="/" p="2" w="100%" color={(location === "/") ? "orange.300" : ""} _hover={{ color: "orange.300" }}>
                                Home
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/shop" p="2" w="100%" color={(location === "/shop") ? "orange.300" : ""}  _hover={{ color: "orange.300" }}>
                                Shop
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/cart" p="2" w="100%" color={(location === "/cart") ? "orange.300" : ""}  _hover={{ color: "orange.300" }}>
                                Cart
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" color={(location === "/wishlist") ? "orange.300" : ""}  _hover={{ color: "orange.300" }}>
                                Wishlist
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" color={(location === "/account") ? "orange.300" : ""}  _hover={{ color: "orange.300" }}>
                                Account
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" color={(location === "/settings") ? "orange.300" : ""}  _hover={{ color: "orange.300" }}>
                                Settings
                            </Link>
                        </Text>

                        <Box p="2" mt="4">
                            <Text fontWeight="600">Info@example.com</Text>
                            <SocialLinks />
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar;