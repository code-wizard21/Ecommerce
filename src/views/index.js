import { Badge, Box, Flex, Grid, Image, Input, Link, Text } from "@chakra-ui/react";
import bgsofas1 from "../assets/imgs/bgsofas.webp"
import bgsofas2 from "../assets/imgs/bgsofas1.webp"
import bgsofas3 from "../assets/imgs/bgsofas3.webp"
import bg from "../assets/imgs/bg.jpg"
import bg1 from "../assets/imgs/bg1.webp"
import bg2 from "../assets/imgs/bg2.webp"
import bg3 from "../assets/imgs/bg3.webp"
import Heading from "../components/heading";
import Product from "../components/product";
import { data } from "../data/products";
import { FiAlertOctagon, FiHeadphones, FiTruck } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../components/heroSection";


const Home = () => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 2,
        infinite: true
    }

    return (
        <Box>
            <Flex justify="flex-end" align="center" position="relative">
                <Box w={[ "100%", "100%", "70%"]} >
                    <Slider { ...settings } style={{ width: "100%", overflow: "hidden" }}>
                        <Box w="100%" h="600px" backgroundImage={`url(${bgsofas1})`} backgroundSize="cover" bgPosition="50%, 75%" alt="bgImage">
                        </Box>
                        <Box w="100%" h="600px" backgroundImage={`url(${bgsofas2})`} backgroundSize="cover" bgPosition="50%, 75%" alt="bgImage"></Box>
                        <Box w="100%" h="600px" backgroundImage={`url(${bgsofas3})`} backgroundSize="cover" bgPosition="50%, 75%" alt="bgImage"></Box>
                    </Slider>
                </Box>
                <HeroSection mainText={"Minimalistic and Modern Interior."} subText={"Upgrade your personality with our quality products. You can never go wrong with any of our products."} />
            </Flex>

            <Box p={[ "10px", "40px"]} bgColor="gray.100">
                <Flex justify="space-around" flexWrap="wrap">
                    <Link href="#" display="flex" color="brand.900" alignItems="center" mx="4" my={[ "15px", null ]}>
                        <FiTruck style={{ fontSize:"30px" }} />
                        <Text px="2" color="black" fontWeight="600">FREE SHIPPING</Text>
                    </Link>
                    <Link href="#" display="flex" color="brand.900" alignItems="center" mx="4" my={[ "15px", null ]}>
                        <FiHeadphones style={{ fontSize:"30px" }}  />
                        <Text px="2" color="black" fontWeight="600">24 X 7 SERVICE</Text>
                    </Link>
                    <Link href="#" display="flex" color="brand.900" alignItems="center" mx="4" my={[ "15px", null ]}>
                        <FiAlertOctagon style={{ fontSize:"30px" }}  />
                        <Text px="2" color="black" fontWeight="600">FESTIVAL OFFER</Text>
                    </Link>
                </Flex>
            </Box>

            <Box fontSize="14px" px={[ null, "10px", "5%", "10%" ]} m="10% 0 50px 0">
                <Heading mainText={"GET AWESOME DISCOUNTS ON ALL PURCHASE"} subText={"Get our awesome discounts now when you purchase."} />
                <Flex justify="space-between" flexWrap="wrap" px={[ "20px", "20px", null ]}>
                    <Link href="/shop" w={[ "100%", "48%", "32%" ]} textAlign="right" backgroundImage={`url(${bg1})`}  bgSize="cover"my={[ "15px", null ]}>
                        <Box p="50px">
                            <Text fontWeight="600">SOFA</Text>
                            <Text fontWeight="600" color="brand.900" mb="20px"><Badge colorScheme="green">SAVE 30%</Badge></Text>
                        </Box>
                    </Link>
                    <Link href="/shop" w={[ "100%", "48%", "32%" ]} textAlign="right" backgroundImage={`url(${bg2})`} bgSize="cover" my={[ "15px", null ]}>
                        <Box p="50px">
                            <Text fontWeight="600">NEW ARRIVAL</Text>
                            <Text fontWeight="600" color="brand.900" mb="20px"><Badge colorScheme="green">SAVE 50%</Badge></Text>
                        </Box>
                    </Link>
                    <Link href="/shop" w={[ "100%", "48%", "32%" ]} textAlign="right" backgroundImage={`url(${bg3})`} bgSize="cover" my={[ "15px", null ]}>
                        <Box p="50px">
                            <Text fontWeight="600">CHAIR</Text>
                            <Text fontWeight="600" color="brand.900" mb="20px"><Badge colorScheme="green">SAVE 20%</Badge></Text>
                        </Box>
                    </Link>
                </Flex>
            </Box>


            <Box py="5%" px={[ null, "20px", "5%", "10%" ]}>
                <Heading mainText={"HOT DEALS FOR YOU"} subText={"Our customers most loved products you can also get."} />

                <Grid gap={4} w="100%" templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}>
                {
                    data.products.map(product => {
                        return (      
                            <Product key={product.id} product={product} />
                        )
                    })
                }
                </Grid>
            </Box>

            <Box py="5%" px={[ null, "0", "5%", "10%" ]} my="5%">
                <Flex justify="space-between" flexWrap="wrap">
                    <Box w={[ null, "100%", "40%" ]} p="5%" ps={[ "5%", "5%", 0 ]}>
                        <Text fontSize={[ "20px", "30px" ]} fontWeight="700" pb="15px" >Artistic Designs with unique shapes.</Text>
                        <Text fontSize="14px" fontWeight="600" mb="35px">Purpose of a furniture is to keep you comfortable while also beautifying your home</Text>
                        <Link href="/shop" fontSize="14px"  p="10px 20px" bgColor="brand.900" color="white" _hover={{ bgColor: "orange.500" }}>Shop now</Link>
                    </Box>
                    <Image src={bg} w={[ null, "100%", "60%" ]} alt="bg" border="5px" borderStyle="solid" borderColor="gray.300" />
                </Flex>
            </Box>

            <Box bgColor="gray.100" p="5%" mb="30px" fontSize="14px">
                <Heading mainText={"Subscribe To Our Newsletter"} />

                <Flex justify="center" align="center" m="auto" w="fit-content" p="2px" bgColor="white" border="1px" borderColor="gray.300" borderRadius="0">
                    <Input placeholder="Enter your email..." fontSize="14px" borderRadius="0" border="none" w={[ "100%", "100%", "300px" ]} />
                    <Link href="/" bgColor="brand.900" p="10px 25px" border="1px" borderColor="brand.900" color="white">
                        Subscribe
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}

export default Home;