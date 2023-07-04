import { useEffect, useState } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import bg1 from "../assets/imgs/bg1.webp"
import bg2 from "../assets/imgs/bg2.webp"
import bg3 from "../assets/imgs/bg3.webp"
import { useSelector } from "react-redux";
import Product from "../components/product";
import ShopFilters from "../components/shopActions/shopFilter";
import { shopSliderSettings } from "../utils/sliderSettings";
import { filterProducts } from "../utils/filterProducts";

const Shop = () => {
    const [products, setProducts] = useState([])
    const defaultProducts = useSelector((state) => state.data.products)


    useEffect(() => {
        setProducts(defaultProducts)
    }, [setProducts, defaultProducts])

    const handleFilters = (filters) => {
        let filterResult = filterProducts(defaultProducts, filters)
        setProducts(filterResult)
    }


    return (
        <Box>
            <Flex justify="center" w="100%">
                <Slider { ...shopSliderSettings } style={{ width: "100%", overflow: "hidden", display: "flex" }}>
                    <Box w="100%" h="250px" backgroundImage={`url(${bg1})`} backgroundSize="cover" bgPosition="50%, 75%">
                        <Box float="right" p="5% 30px" lineHeight="40px" fontSize="0.8rem" w={["50%"]}>
                            <Text mt="30px" fontSize="20px" fontWeight="700" color="brand.900">Get as low as 60% discount on our chairs</Text>
                        </Box>
                    </Box>
                    <Box w="100%" h="250px" backgroundImage={`url(${bg2})`} backgroundSize="cover" bgPosition="50%, 75%">
                        <Box float="right" p="5% 30px" lineHeight="40px" fontSize="0.8rem" w={["50%"]}>
                            <Text mt="30px" fontSize="20px" fontWeight="700" color="brand.900">Free delivery when you purchase our Tv stands</Text>
                        </Box>
                    </Box>
                    <Box w="100%" h="250px" backgroundImage={`url(${bg3})`} backgroundSize="cover" bgPosition="50%, 75%">
                        <Box float="right" p="5% 30px" lineHeight="40px" fontSize="0.8rem" w={["50%"]}>
                            <Text mt="30px" fontSize="20px" fontWeight="700" color="brand.900">Flash sales ongoing for our sofa collections</Text>
                        </Box>
                    </Box>
                </Slider>
            </Flex>

            <Flex my="5%" mx={[ "20px", "20px", "10%" ]} flexWrap="wrap">

                <ShopFilters handleFilters={handleFilters} clearFilters={() => setProducts(defaultProducts)}/>

                <Box w={[ "100%", "100%", "auto" ]} flex="1">
                    <Grid gap={4} templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]}>
                    { products && 
                        products.map(product => {
                            return (      
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                    </Grid>
                </Box>
            </Flex>
        </Box>
    )
}

export default Shop;