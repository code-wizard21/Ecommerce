import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Link, Text, useDisclosure, Box } from "@chakra-ui/react"
import { useRef } from "react"
import { FaBars } from "react-icons/fa";
import SearchBar from "./searchbar";
import SocialLinks from "./sociallinks";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return(
        <>
            <Button href="/" p="2" border="1px" me={[ "5px", "5px", 0 ]} borderColor="gray.100" borderRadius="0" onClick={onOpen}>
                <FaBars />
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton py="5" px="6" border="1px" borderColor="gray.100" borderRadius="0" />
                    <DrawerHeader>Motara Furnitures</DrawerHeader>
                    <DrawerBody fontSize="14px">

                        <SearchBar />

                        <Text display="flex" mt="3">
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                Home
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                About
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/shop" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                Shop
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                Wishlist
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                Dashboard
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
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