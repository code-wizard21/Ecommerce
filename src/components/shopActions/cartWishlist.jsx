import { Button, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { FaHeart, FaMinus } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../redux/slice/cartSlice";
import { addProductToWishlist, removeProductFromWishlist } from "../../redux/slice/wishlistSlice";
import ChangeQuantity from "./changeQuantity";

const CartWishlist = ({ product }) => {
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
        <Flex mt="30px" w="100%">
            {
            cartIds &&
            (cartIds.indexOf(product.id) !== -1) ?
                <Flex flex="1" align="center">
                    <Button flex="1" me="5px" fontSize="14px" bgColor="gray.100" borderRadius="0" onClick={() => dispatch(removeProductFromCart(product.id))}><FaMinus /></Button>
                    <ChangeQuantity product={product}/>
                </Flex>
            :
                <Button flex="1" fontSize="14px" bgColor="gray.100" borderRadius="0" onClick={() => dispatch(addProductToCart(product.id))}><FiShoppingCart /></Button>
            }
            {
            wishlistIds &&
            (wishlistIds.indexOf(product.id) !== -1) ?
                <Button  fontSize="14px" bgColor="gray.100" color="red" borderRadius="0" ms="1" onClick={() => dispatch(removeProductFromWishlist(product.id))}><FaHeart /></Button>
            :
                <Button  fontSize="14px" bgColor="gray.100" borderRadius="0" ms="1" onClick={() => dispatch(addProductToWishlist(product.id))}><FiHeart /></Button>
            }

        </Flex>
    )
}

export default CartWishlist;