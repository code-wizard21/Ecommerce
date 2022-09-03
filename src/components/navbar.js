import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure, Box } from "@chakra-ui/react"
import { useRef } from "react"
import { HiMenuAlt3 } from "react-icons/hi";
import SearchBar from "./searchbar";
import SocialLinks from "./sociallinks";
import NavLink from "./navLink";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return(
        <>
            <Button href="/"  me={[ "7px", "5px", 0 ]} fontSize="20px" bgColor="white" border="none" onClick={onOpen} minW="auto">
                <HiMenuAlt3 />
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton py="4" px="3" m="3" border="1px" borderColor="gray.100" borderRadius="0" />
                    <DrawerHeader  my="2">Motara Furnitures</DrawerHeader>
                    <DrawerBody fontSize="14px">

                        <SearchBar />
                        <NavLink navLocation={"home"} />                       
                        <NavLink navLocation={"shop"} />
                        <NavLink navLocation={"cart"} />
                        <NavLink navLocation={"wishlist"} />
                        <NavLink navLocation={"account"} />
                        <NavLink navLocation={"settings"} />
                        

                        <Box py="2" mt="4">
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