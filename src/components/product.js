import { Badge, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../redux/slice/cartSlice";
import { addProductToWishlist, removeProductFromWishlist } from "../redux/slice/wishlistSlice";
import { useEffect,useState } from "react";
import { FaHeart } from "react-icons/fa";

const Product = ({ product }) => {
    const [cartIds, setCartIds] = useState()
    const [wishlistIds, setWishlistIds] = useState()
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.data.cart)
    const wishlist = useSelector((state) => state.data.wishlist)

    
    useEffect(() => {
        setCartIds(cart.map(element => element.id))
        setWishlistIds(wishlist.map(element => element.id))
    }, [cart, wishlist])

    return (
        <Box position="relative" w={[ "100%", "45%", "23%" ]}  m={[ "20px", "10px", "10px" ]} shadow="base">
            <Badge bgColor="brand.900" color="white" position="absolute" top="10px" right="10px">{product.discountPercentage}%</Badge>
            <Link to={{pathname:`/singleProduct?id=${product.id}`}}>
                <Image w="100%" src={product.thumbnail} alt="product" p="4" />
            </Link>
            <Box p="4" fontSize="14px">
                <Flex px="5px" align="center">
                    <Text fontSize="16px" fontWeight="600" me="10px">${product.price}</Text>
                    <Badge colorScheme="gray" textDecoration="line-through">$200</Badge>
                </Flex>
                <Text my="20px" p="3px 6px" >{product.title}</Text>
                <Flex>
                    {
                    cartIds &&
                    (cartIds.indexOf(product.id) !== -1) ?
                        <Button flex="1" fontSize="14px" bgColor="gray.100" borderRadius="0" onClick={() => dispatch(removeProductFromCart(product.id))}>Remove</Button>
                    :
                        <Button flex="1" fontSize="14px" bgColor="gray.100" borderRadius="0" onClick={() => dispatch(addProductToCart(product.id))}>Add</Button>
                    }
                    {
                    wishlistIds &&
                    (wishlistIds.indexOf(product.id) !== -1) ?
                        <Button  fontSize="14px" bgColor="gray.100" color="red" borderRadius="0" ms="1" onClick={() => dispatch(removeProductFromWishlist(product.id))}><FaHeart /></Button>
                    :
                        <Button  fontSize="14px" bgColor="gray.100" borderRadius="0" ms="1" onClick={() => dispatch(addProductToWishlist(product.id))}><FiHeart /></Button>
                    }

                </Flex>
            </Box>
        </Box>
    )
}

export default Product;