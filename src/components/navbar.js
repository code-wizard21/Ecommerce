import { Flex, Input, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Link, Text, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { FaBars, FaSearch } from "react-icons/fa";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return(
        <>
            <Button href="/" p="5" border="1px" me={[ "5px", "5px", 0 ]} borderColor="gray.100" borderRadius="0" onClick={onOpen}>
                <FaBars />
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton py="5" px="6" border="1px" borderColor="gray.100" borderRadius="0" />
                    <DrawerHeader>Motara Furnitures</DrawerHeader>
                    <DrawerBody fontSize="14px">

                        <Flex align="center" w={[ "100%", "250px" ]} p="2px" border="1px" borderColor="gray.100" borderRadius="0">
                            <Input placeholder="Search here" fontSize="14px" borderRadius="0" />
                            <Link href="/" bgColor="gray.100" p="3" border="1px" borderColor="gray.100">
                                <FaSearch />
                            </Link>
                        </Flex>

                        <Text display="flex">
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
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                Shop
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                Categories
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                Wishlists
                            </Link>
                        </Text>
                        <Text display="flex">
                            <Link href="/" p="2" w="100%" _hover={{ bgColor: 'orange.300', color: "white" }}>
                                Settings
                            </Link>
                        </Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar;