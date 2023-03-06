import { Suspense } from "react"
import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import StarRating from "./starRating"
import { Link } from "react-router-dom"
import CartWishlist from "./shopActions/cartWishlist";

const renderLoader = () => <p>Loading</p>;

const Product = ({ product }) => {


    return (
        <Box position="relative" shadow="base">
            <Suspense fallback={renderLoader()}>
                <Badge bgColor="brand.900" color="white" position="absolute" top="10px" right="10px">{product.discountPercentage}%</Badge>
                <Link to={{pathname:`/SingleProduct?id=${product.id}`}}>
                        <Image w="100%" src={product.thumbnail} alt="product" p="4" />
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
            </Suspense>
        </Box>
    )
}

export default Product;