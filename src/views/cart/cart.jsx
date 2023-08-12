import { useState, useEffect } from "react";
import { Badge, Box, Button, Divider, Flex, Image, Input, Link, Text } from "@chakra-ui/react"
import Heading from "../../components/heading/heading";
import { FaHandPointDown } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart } from "../../redux/slice/cartSlice";
import { Link as RouterLink, } from "react-router-dom"
import ChangeQuantity from "../../components/shopActions/changeQuantity";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.data.cart)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        let subTotalSum = 0;
        cart.map(item => { return subTotalSum += item.price*(item.quantity || 1) });
        setSubTotal(subTotalSum);
    }, [setSubTotal, cart])

    return (
        <Box py="50px" px={[ "20px", "20px", "10%" ]}>
            <Heading mainText={"MY CART"} subText={"Finish up the order and get a reward."} />

            <Flex flexWrap="wrap">
                <Box w="100%" fontSize="14px" >
                    <Flex flexWrap={["wrap", "no-wrap"]} align={"flex-start"} bgColor={"#f3f3f3"} my="10px">
                        <Box w={[ "100%", "100%", "60%" ]} >
                        {
                            cart && (cart.length === 0) ? <Text p="30px" minH="30vh"bgColor="white">Your Cart is empty. Add products from the <Link href="/shop" color="brand.900">Shop</Link></Text> :
                            cart.map(product => { 
                                return (
                                
                                <Flex key={product.id} align="center" borderBlock="1px solid #f3f3f3" bgColor="white" p="10px">
                                    <RouterLink to={{pathname:`/singleProduct?id=${product.id}`}}>
                                        <Image src={product.thumbnail} w={["100px","150px"]} />
                                    </RouterLink>
                                    <Box p="30px 10px" flex="1">
                                        <Text fontWeight="bold">{product.title}<Badge colorScheme="red" p="2" float="right"><FiTrash  onClick={() => dispatch(removeProductFromCart(product.id))}/></Badge></Text>
                                        <Text>{product.category}</Text>
                                        <Flex justify="space-between" align="flex-end" flexWrap="wrap" w="100%" mt="6">
                                            <Text fontSize="18px" fontWeight="bold">${product.price}</Text>
                                            <ChangeQuantity product={product} />
                                        </Flex>
                                    </Box>
                                </Flex>

                                )
                            })
                        }
                        </Box>

                        <Box p="10px" w={["100%", "100%", "40%"]} >
                            <Flex p="3"><Text>Have a coupon code? Enter here </Text> <Text color="brand.900" p="5px 10px"><FaHandPointDown /></Text></Flex>
                            <Flex align="center" w="100%" p="2px" mb="5%" border="1px" bgColor="white" borderColor="gray.100" borderRadius="0">
                                <Input placeholder="Enter code" fontSize="14px" borderRadius="0" />
                                <Button href="/" bgColor="gray.100" fontSize="14px" p="12px 25px" border="1px" borderColor="gray.100" borderRadius="0">
                                    Redeem code
                                </Button>
                            </Flex>
                            <Text p="3" color="brand.900">ORDER SUMMARY</Text>
                            <Flex justify="space-between" bgColor="white" p="15px">
                                <Text>Subtotal</Text>
                                <Text as="b">${ subTotal }</Text>
                            </Flex>
                            <Flex justify="space-between" bgColor="white" p="15px">
                                <Text>Delivery</Text>
                                <Text as="b">$50.90</Text>
                            </Flex>
                            <Flex justify="space-between" bgColor="white" p="15px">
                                <Text>Discount</Text>
                                <Text as="b">%50</Text>
                            </Flex>

                            <Divider />
                            
                            <Flex justify="space-between" bgColor="white" p="15px">
                                <Text>Total:</Text>
                                <Text as="b" fontSize="20px" color="brand.900">${(subTotal + 50.90) / 2 }</Text>
                            </Flex>
                            <Flex m="20px 0" bgColor="white" p="10px">
                                <Link href="/checkout" p="12px" w="100%" textAlign="center" borderRadius="2px" color="white" bgColor="brand.900">Checkout now</Link>
                            </Flex>
                        </Box>
                        

                    </Flex>
                </Box>

            </Flex>
        </Box>
    )
}

export default Cart;