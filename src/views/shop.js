import { Box, Flex, Link, Text } from "@chakra-ui/react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from "../assets/imgs/bg1.png"
import bg2 from "../assets/imgs/bg2.png"
import bg3 from "../assets/imgs/bg3.png"
import { products } from "../data/products";
import Product from "../components/product";

const Shop = () => {
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
                        <Box p="30px" fontSize="0.8rem" w={["100%", "80%", "80%", "60%"]}>
                            <Text mb="30px" fontSize="25px" fontWeight="700" color="orange.500">Get as low as 60% discount on our chairs</Text>
                            <Link p="10px 20px" border="1px solid black">SHOP NOW</Link>
                        </Box>
                    </Box>
                    <Box w="100%" h="250px" backgroundImage={`url(${bg2})`} backgroundSize="cover" bgPosition="50%, 75%">
                        <Box p="30px" fontSize="0.8rem" w={["100%", "80%", "80%", "60%"]}>
                            <Text mb="30px" fontSize="25px" fontWeight="700" color="green.500">Free delivery when you purchase our Tv stands</Text>
                            <Link p="10px 20px" border="1px solid black">SHOP NOW</Link>
                        </Box>
                    </Box>
                    <Box w="100%" h="250px" backgroundImage={`url(${bg3})`} backgroundSize="cover" bgPosition="50%, 75%">
                        <Box p="30px" fontSize="0.8rem" w={["100%", "80%", "80%", "60%"]}>
                            <Text mb="30px" fontSize="25px" fontWeight="700" color="purple.500">Flash sales ongoing for our sofa collections</Text>
                            <Link p="10px 20px" border="1px solid black">SHOP NOW</Link>
                        </Box>
                    </Box>
                </Slider>
            </Box>

            <Flex m="5% 10%">
                <Box>
                    <Flex justify="space-between" flexWrap="wrap">
                    {
                        products.products.map(product => {
                            return (      
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Shop;