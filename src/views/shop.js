import { Box, Flex } from "@chakra-ui/react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../assets/imgs/bg.jpg"
import bgSofas from "../assets/imgs/bgsofas.jpg"

const Shop = () => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Box p="20px 10%">
            <Flex justify="center" w="100%">
                <Slider { ...settings } style={{ width: "100%" }}>
                    <Box p="30px" w="90%" h="350px" backgroundImage={`url(${bg})`} backgroundSize="cover">
                        20% discount now
                    </Box>
                    <Box p="30px" w="90%" h="350px" backgroundImage={`url(${bgSofas})`} backgroundSize="cover">
                        20% discount now
                    </Box>
                </Slider>
            </Flex>
        </Box>
    )
}

export default Shop;