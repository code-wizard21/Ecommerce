import { Box, Flex, Input, Link, Select, Text } from "@chakra-ui/react"
import Heading from "../components/heading";

const Checkout= () => {
    return (
        <Box py="50px" px={[ "20px", "20px", "10%" ]}>
            <Heading mainText={"CHECKOUT"} subText={"Order your products by filling the neccessary information."} />

            <Flex flexWrap="wrap">
                <Box w={["100%", "100%", "60%"]} fontSize="14px" >
                    <Box p="20px" bgColor="#f3f3f3">
                    <Text fontWeight="700" fontSize="18px" mb="3" p="2" color="brand.900">ORDER NOW</Text>
                    <form method="post" action="/">
                        <Box bgColor="white" p="10px">
                            <Box>
                                <h2>
                                    <Box flex="1" p="3" textAlign="left">Personal Details</Box>
                                    <Flex position="relative">
                                        <Input py="30px" pb="15px" type="text" name="fullname" my="1" fontSize="14px" borderRadius="0" />
                                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Fullname:</Text>
                                    </Flex>
                                    <Flex position="relative">
                                        <Input py="30px" pb="15px" type="text" name="email" my="1" fontSize="14px" borderRadius="0" />
                                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Email address:</Text>
                                    </Flex>
                                    <Flex position="relative">
                                        <Input py="30px" pb="15px" type="text" name="company" my="1" fontSize="14px" borderRadius="0" />
                                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Company (optional):</Text>
                                    </Flex>
                                </h2>
                            </Box>

                            <Box my="4">
                                <h2>
                                    <Box flex="1" p="3" textAlign="left">Shipping Details</Box>
                                    <Flex position="relative">
                                        <Input py="30px" pb="15px" type="text" name="address" my="1" fontSize="14px" borderRadius="0" />
                                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Shipping address:</Text>
                                    </Flex>
                                    <Flex position="relative">
                                        <Input py="30px" pb="15px" type="text" name="state" my="1" fontSize="14px" borderRadius="0" />
                                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >State:</Text>
                                    </Flex>
                                    <Select type="text" name="city" placeholder="Local Government" my="1" fontSize="14px" borderRadius="0">
                                        <option>Ikeja</option>
                                    </Select>
                                    <Flex position="relative">
                                        <Input py="30px" pb="15px" type="number" name="zip" my="1" fontSize="14px" borderRadius="0" />
                                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Zip code:</Text>
                                    </Flex>
                                    <Flex position="relative">
                                        <Input py="30px" pb="15px" type="tel" name="phone" my="1" fontSize="14px" borderRadius="0" />
                                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Phone number:</Text>
                                    </Flex>
                                </h2>
                            </Box>
                        </Box>
                    </form>
                    </Box>
                </Box>

                <Box w={["100%", "100%", "36%"]} border="1px solid #f4f4f4" fontSize="14px" p="20px" mx={[0, 0, "2%"]} >
                    <Box>
                        <Flex position="relative">
                            <Input py="30px" pb="15px" type="text" name="cardName" my="1" fontSize="14px" borderRadius="0" />
                <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Name on card:</Text>
                        </Flex>
                        <Flex position="relative">
                            <Input py="30px" pb="15px" type="text" name="CardNumber" my="1" fontSize="14px" borderRadius="0" />
                <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Card number:</Text>
                        </Flex>
                        <Select name="type" borderRadius="0">
                            <option>Visa</option>
                            <option>Mastercard</option>
                            <option>American Express</option>
                        </Select>
                        <Flex>
                            <Flex position="relative" w="100%">
                                <Input py="30px" pb="15px" type="text" name="expiry" my="1" fontSize="14px" borderRadius="0" me="1" />
                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >Expiry date:</Text>
                            </Flex>
                            <Flex position="relative">
                                <Input py="30px" pb="15px" type="text" name="cvv" my="1" fontSize="14px" borderRadius="0" />
                        <Text fontSize="12px" color="gray.400" position="absolute" top="7px" left="17px" >CVV:</Text>
                            </Flex>
                        </Flex>
                        
                    </Box>

                    <Flex m="20px 0" bgColor="white" p="10px 0">
                        <Link href="/order" p="12px" w="100%" textAlign="center" borderRadius="2px" color="white" bgColor="brand.900">Place order</Link>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}

export default Checkout;