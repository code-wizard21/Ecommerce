import { Badge, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../redux/slice/cartSlice";
import { useEffect,useState } from "react";

const Product = ({ product }) => {
    const [cartIds, setCartIds] = useState()
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.data.cart)

    
    useEffect(() => {
        setCartIds(cart.map(element => element.id))
    }, [cart])

    return (
        <Box position="relative" w={[ "100%", "45%", "23%" ]}  m={[ "20px", "10px", "0" ]} shadow="base">
            <Badge colorScheme="orange" position="absolute" top="10px" right="10px">{product.discountPercentage}%</Badge>
            <Image w="100%" src={product.thumbnail} alt="product" p="4" />
            <Box p="2" fontSize="14px">
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

                    <Button  fontSize="14px" bgColor="gray.100" borderRadius="0" ms="1"><FiHeart /></Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default Product;