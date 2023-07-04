import { Avatar, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure, Box, Link } from "@chakra-ui/react"
import { useRef } from "react"
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { FiHeart, FiHome, FiShoppingCart } from "react-icons/fi";
import SearchBar from "../searchbar/searchbar";
import SocialLinks from "../sociallinks/sociallinks";
import NavLink from "./navLink";
import { BiStore } from "react-icons/bi";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/slice/authSlice";
import { logOut } from "../../firebase";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const user = useSelector(state => state.data.user)
    const dispatch = useDispatch();

    const handleLogout = async () => {
        console.log("clicked")
        dispatch(userLogout(null));
        await logOut()
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error)
        // if(isUserLoggedOut){
        // } else {
        //     console.log("Could not log user out")
        // }
    }

    return(
        <>
            <Button href="/"  me={[ "7px", "5px", 0 ]} fontSize="20px" ms="2" bgColor="white" border="none" onClick={onOpen} minW="auto">
                <HiMenu />
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton py="4" px="3" m="3" border="1px" borderColor="gray.100" borderRadius="0" />
                    <DrawerHeader  my="2" display="flex" alignItems="center">
                        <Avatar size="sm" me="2" /> 
                        <Box>
                            <Link href={user ? "/dashboard" : "/login"} fontSize="14px">{user ? "Welcome" : "Login"}</Link>
                            <Text fontSize="12px">Personal balance: $0</Text>
                        </Box>
                    </DrawerHeader>
                    <DrawerBody fontSize="14px">

                        <SearchBar />

                        <Box fontSize="15px" my="4" mx="1">
                            <Box fontWeight='600' my="2">
                                <NavLink navLocation={"Home"}>
                                    <FiHome />
                                </NavLink> 
                            </Box>       
                            <Box fontWeight='600' my="2">
                                <NavLink navLocation={"Shop"}>
                                    <BiStore />
                                </NavLink> 
                            </Box>    
                            <Box fontWeight='600' my="2">
                                <NavLink navLocation={"Cart"}>
                                    <FiHome />
                                </NavLink> 
                            </Box>        
                            <Box fontWeight="600" my="2">      
                                <NavLink navLocation={"Wishlist"}>
                                    <FiShoppingCart />
                                </NavLink>
                            </Box>    
                            <Box fontWeight="600" my="2">      
                                <NavLink navLocation={"Account"}>
                                    <FiHeart />
                                </NavLink>
                            </Box>    
                            <Box fontWeight="600" my="2">      
                                <NavLink navLocation={"Settings"}>
                                    <FaCog />
                                </NavLink>
                            </Box>
                            {
                                (!user) ? "" :
                                <Box fontWeight="600" my="2">
                                    <Box display="flex" navLocation={"Logout"} cursor={"pointer"} onClick={() => handleLogout()} py="2" alignItems="center" w="100%"  _hover={{ color: "brand.900" }}>
                                        <FaSignOutAlt />
                                        <Text me="3" ml={"10px"} >Logout</Text>
                                    </Box>
                                </Box>
                            }
                        </Box>
                        

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