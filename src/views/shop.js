import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from "../assets/imgs/bg1.jpg"
import bg2 from "../assets/imgs/bg2.jpg"
import bg3 from "../assets/imgs/bg3.jpg"
import { useSelector } from "react-redux";
import Product from "../components/product";

const Shop = () => {
    const products = useSelector((state) => state.data.products)

    var settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 2,
        infinite: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    }


    return (
        <Box>
            <Box justify="center" w="100%">
                <Slider { ...settings } style={{ width: "100%", overflow: "hidden" }}>
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
            </Box>

            <Flex my="5%" mx={[ "20px", "20px", "5%" ]} flexWrap="wrap">
                <Box w={[ "100%", "100%", "25%" ]} p="2">
                    <Text>Filter Products</Text>
                </Box>
                <Box w={[ "100%", "100%", "75%" ]} p="2">
                    <Grid gap={4} templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]}>
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