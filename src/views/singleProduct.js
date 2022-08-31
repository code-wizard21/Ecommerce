import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Heading from "../components/heading"
import StarRating from "../components/starRating"
import { data } from "../data/products"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const SingleProduct = () => {
    const location = useLocation().search;
    const [ product, setProduct ] = useState(data.products[0])

    const useQuery = () => new URLSearchParams(location)

    let query = useQuery();

    useEffect(() => {
        setProduct(data.products[query.get("id") - 1]);
    }, [setProduct, query])

    return (
        <>
            <Heading mainText={"PRODUCT"} />
            {
                product &&
            <Flex justify="" flexWrap="wrap" mx={[ "20px", "20px", "10%"]} mb="10%">
                <Box w={[ "100%", "100%", "40%"]}>
                    <Image src={product.thumbnail} w="100%" alt="singleProduct" />
                </Box>

                <Box w={[ "100%", "100%", "60%" ]} py="5%" px={[ "0", "0", "10%" ]}>
                    <Text fontSize="25px" fontWeight="600" pb="20px">{product.title}</Text>
                    <Text fontSize="30px" color="gray.500" pb="20px">${product.price}</Text>
                    <StarRating rating={product.rating} />
                    <Text my="20px">{product.description}</Text>
                    <Text>CATEGORY: {product.category}</Text>
                </Box>
            </Flex>
            }
        </>
    )
}

export default SingleProduct;