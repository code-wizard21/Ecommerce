import { Badge, Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react"
import Heading from "../components/heading";
import chair from "../assets/imgs/chairs/chair03-01.png"
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const Cart = () => {
    return (
        <Box py="50px" px={[ "20px", "20px", "10%" ]}>
            <Heading mainText={"MY CART"} subText={"Finish up the order and get a reward."} />

            <Flex flexWrap="wrap">
                <Box w={["100%", "100%", "60%"]} fontSize="14px" >
                    <Box p="20px" bgColor="#f3f3f3">

                        <Flex align="center" borderBlock="1px solid #f3f3f3" bgColor="white" p="10px 20px">
                            <Image src={chair} w="150px" />
                            <Box p="30px" flex="1">
                                <Text fontWeight="bold">Ashby center chair <Badge colorScheme="red" p="2" float="right"><FiTrash /></Badge></Text>
                                <Text>chair, furniture</Text>
                                <Flex justify="space-between" align="flex-end" flexWrap="wrap" w="100%" mt="6">
                                    <Text fontSize="18px" fontWeight="bold">$120.00</Text>
                                    <Flex justify="flex-end" mt="10px">
                                        <Button borderColor="gray.100" borderRadius="0" p="2"><FaPlus /></Button>
                                        <Input type="number" borderColor="gray.100" borderRadius="0" w="60px" readOnly={true} value="20"/>
                                        <Button borderColor="gray.100" borderRadius="0" p="2"><FaMinus /></Button>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                        
                        <Flex align="center" borderBlock="1px solid #f3f3f3" bgColor="white" p="10px 20px">
                            <Image src={chair} w="150px" />
                            <Box p="30px" flex="1">
                                <Text fontWeight="bold">Ashby center chair <Badge colorScheme="red" p="2" float="right"><FiTrash /></Badge></Text>
                                <Text>chair, furniture</Text>
                                <Flex justify="space-between" align="flex-end" flexWrap="wrap" w="100%" mt="6">
                                    <Text fontSize="18px" fontWeight="bold">$120.00</Text>
                                    <Flex justify="flex-end" mt="10px">
                                        <Button borderColor="gray.100" borderRadius="0" p="2"><FaPlus /></Button>
                                        <Input type="number" borderColor="gray.100" borderRadius="0" w="60px" />
                                        <Button borderColor="gray.100" borderRadius="0" p="2"><FaMinus /></Button>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>

                    </Box>
                </Box>

                <Box w={["100%", "100%", "36%"]} fontSize="14px" p="20px" mx="2%" >
                    <Text fontWeight="700" fontSize="18px" color="orange.300">CHECKOUT</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Cart;