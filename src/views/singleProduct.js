import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react"
import Heading from "../components/heading"
import StarRating from "../components/starRating"
import { data } from "../data/products"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Slider from "react-slick"
import CartWishlist from "../components/shopActions/cartWishlist"

const SingleProduct = () => {
    const location = useLocation().search;
    const [ product, setProduct ] = useState(data.products[0])

    const useQuery = () => new URLSearchParams(location)

    let query = useQuery();

    useEffect(() => {
        setProduct(data.products[query.get("id") - 1]);
    }, [setProduct, query])

    
    var settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 500,
        initialSlide: 2,
        infinite: true,
        arrows: false
    }

    return (
        <>
            <Heading mainText={"PRODUCT"} />
            {
                product &&
            <Flex justify="" flexWrap="wrap" mx={[ "20px", "20px", "10%"]} mb="5%">
                <Flex w={[ "100%", "100%", "40%"]}>
                    <Slider { ...settings } style={{ width: "100%", overflow: "hidden" }}>
                        {
                            [product.thumbnail, ...product.images].map((item, index) => { 
                                return (
                                <Image src={item} key={index} w="100%" h="100%" alt="singleProduct" />
                            )})
                        }
                    </Slider>
                </Flex>

                <Box w={[ "100%", "100%", "60%" ]} py="5%" px={[ "0", "0", "10%" ]}>
                    <Text fontSize="25px" fontWeight="600" pb="20px">{product.title}</Text>
                    <Text fontSize="30px" color="gray.500" pb="20px">
                        ${product.price - ((product.discountPercentage/100) * product.price)}
                        <Badge colorScheme="gray" ms="10px" textDecoration="line-through">${product.price}</Badge>
                    </Text>
                    <StarRating rating={product.rating} />
                    <Text my="20px" lineHeight="25px">{product.description}</Text>
                    <Text>CATEGORY: {product.category}</Text>

                    <CartWishlist product={product} />
                </Box>
            </Flex>
            }

            <Box w={[ "auto", "auto", "50%" ]} mx={[ "20px", "20px", "10%" ]} mb="10%">
                <Text fontSize="18px" fontWeight="700" my="20px" color="brand.900">DETAILS</Text>

                {
                    Object.entries(product.details).map((item, index) => {
                        return (
                            <Flex key={index} justify="space-between" py="2">
                                <Text as="b">{item[0]}:</Text>
                                <Text>{item[1]}</Text>
                            </Flex>                            
                        )
                    })  
                }
            </Box>
        </>
    )
}

export default SingleProduct;