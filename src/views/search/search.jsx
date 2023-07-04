import { Badge, Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CartWishlist from "../../components/shopActions/cartWishlist";
import StarRating from "../../components/starRating/starRating";

const Search = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query").toLowerCase()
    const products = useSelector((state) => state.data.products)

    useEffect(() => {
        console.log(query)
    }, [query])

    return (
        <Box  px={[ null, "10px", "5%", "10%" ]} m="10% 0 50px 0" bgColor="white" shadow="sm">
            <Text as="h1" opacity="0.8" fontWeight="700" mb="6" fontSize={[ "20px", "20px", "30px" ]}>SEARCH RESULTS FOR: {query}</Text>
            {
                products && products.filter(item => ((item.title.toLowerCase().indexOf(query) !== -1) || (item.description.toLowerCase().indexOf(query) !== -1))).map(product => {
                    return (
                        <Flex p="2" mb="2" key={product.id} position="relative" borderBlock="1px solid #d4d4d4">
                            <Badge bgColor="brand.900" color="white" position="absolute" top="10px" right="10px">{product.discountPercentage}%</Badge>
                            <Link to={{pathname:`/SingleProduct?id=${product.id}`}}>
                                    <Image w="150px" src={product.thumbnail} alt="product" p="4" />
                            </Link>
                            <Box p="4" fontSize="14px">
                                <Flex px="5px" align="center" justify="space-between">
                                    <Text fontSize="16px" fontWeight="600">
                                        ${product.price - ((product.discountPercentage/100) * product.price)}
                                        <Badge colorScheme="gray" ms="10px" textDecoration="line-through">${product.price}</Badge>
                                    </Text>
                                    <StarRating rating={product.rating} />
                                </Flex>
                                <Text my="20px" p="3px 6px" >{product.title}</Text>
                                <CartWishlist product={product} />
                            </Box>
                        </Flex>
                    )
                })
            }
        </Box>
    )
}

export default Search;