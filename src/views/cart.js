import { Badge, Box, Button, Divider, Flex, Image, Input, Link, Text } from "@chakra-ui/react"
import Heading from "../components/heading";
import chair from "../assets/imgs/chairs/chair03-01.png"
import { FaHandPointDown, FaMinus, FaPlus } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const Cart = () => {


    return (
        <Box py="50px" px={[ "20px", "20px", "10%" ]}>
            <Heading mainText={"MY CART"} subText={"Finish up the order and get a reward."} />

            <Flex flexWrap="wrap">
                <Box w={["100%", "100%", "60%"]} fontSize="14px" >
                    <Box p="20px" bgColor="#f3f3f3">

                        <Flex align="center" borderBlock="1px solid #f3f3f3" bgColor="white" p="10px">
                            <Image src={chair} w={["100px","150px"]} />
                            <Box p="30px 10px" flex="1">
                                <Text fontWeight="bold">Ashby center chair <Badge colorScheme="red" p="2" float="right"><FiTrash /></Badge></Text>
                                <Text>chair, furniture</Text>
                                <Flex justify="space-between" align="flex-end" flexWrap="wrap" w="100%" mt="6">
                                    <Text fontSize="18px" fontWeight="bold">$120.00</Text>
                                    <Flex justify="flex-end" mt="10px">
                                        <Button size="sm" borderColor="gray.100" fontSize="10px" borderRadius="0" p="1"><FaPlus /></Button>
                                        <Input size="sm" type="number" borderColor="gray.100" fontSize="12px" borderRadius="0" w="40px" readOnly={true} value="20"/>
                                        <Button size="sm" borderColor="gray.100" fontSize="10px" borderRadius="0" p="1"><FaMinus /></Button>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                        
                        <Flex align="center" borderBlock="1px solid #f3f3f3" bgColor="white" p="10px">
                            <Image src={chair} w={["100px","150px"]} />
                            <Box p="30px 10px" flex="1">
                                <Text fontWeight="bold">Ashby center chair <Badge colorScheme="red" p="2" float="right"><FiTrash /></Badge></Text>
                                <Text>chair, furniture</Text>
                                <Flex justify="space-between" align="flex-end" flexWrap="wrap" w="100%" mt="6">
                                    <Text fontSize="18px" fontWeight="bold">$120.00</Text>
                                    <Flex justify="flex-end" mt="10px">
                                        <Button size="sm" borderColor="gray.100" fontSize="10px" borderRadius="0" p="1"><FaPlus /></Button>
                                        <Input size="sm" type="number" borderColor="gray.100" fontSize="12px" borderRadius="0" w="40px" readOnly={true} value="20"/>
                                        <Button size="sm" borderColor="gray.100" fontSize="10px" borderRadius="0" p="1"><FaMinus /></Button>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>

                        <Box justify="space-between" p="10px 0" >
                            <Flex p="3" pt="5%"><Text>Have a coupon code? Enter here </Text> <Text color="orange.300" p="5px 10px"><FaHandPointDown /></Text></Flex>
                            <Flex align="center" w="100%" p="2px" mb="5%" border="1px" bgColor="white" borderColor="gray.100" borderRadius="0">
                                <Input placeholder="Enter code" fontSize="14px" borderRadius="0" />
                                <Button href="/" bgColor="gray.100" fontSize="14px" p="12px 25px" border="1px" borderColor="gray.100" borderRadius="0">
                                    Redeem code
                                </Button>
                            </Flex>
                            <Text p="3" color="orange.300">ORDER SUMMARY</Text>
                            <Flex justify="space-between" bgColor="white" p="15px">
                                <Text>Subtotal</Text>
                                <Text as="b">$400.90</Text>
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
                                <Text as="b" fontSize="20px" color="orange.300">$400.90</Text>
                            </Flex>
                        </Box>
                        
                        <Flex m="20px 0" bgColor="white" p="10px">
                            <Link href="/checkout" p="12px" w="100%" textAlign="center" borderRadius="2px" color="white" bgColor="orange.300">Checkout now</Link>
                        </Flex>

                    </Box>
                </Box>

                <Box w={["100%", "100%", "36%"]} border="1px solid #f4f4f4" fontSize="14px" p="20px" mx="2%" >
                    <Text fontWeight="700" fontSize="18px" mb="3" color="orange.300">ORDER NOW</Text>

                </Box>
            </Flex>
        </Box>
    )
}

export default Cart;