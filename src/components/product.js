import { Badge, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Product = ({ product }) => {
    return (
        <Box position="relative" w={[ "100%", "45%", "23%" ]}  m={[ "20px", "10px", "0" ]} shadow="base">
            <Badge colorScheme="orange" position="absolute" top="10px" right="10px">{product.discountPercentage}%</Badge>
            <Image w="100%" src={product.thumbnail} alt="product" p="4" />
            <Box p="2" fontSize="14px">
                <Flex px="5px" align="center">
                    <Text fontSize="18px" fontWeight="700" me="10px">${product.price}</Text>
                    <Badge colorScheme="gray" textDecoration="line-through">$200</Badge>
                </Flex>
                <Text my="20px" p="3px 6px" >{product.title}</Text>
                <Flex>
                    <Button flex="1" fontSize="14px" bgColor="gray.100" borderRadius="0">Add</Button>
                    <Button  fontSize="14px" bgColor="gray.100" borderRadius="0" ms="1"><FaHeart /></Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default Product;