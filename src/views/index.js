import { Badge, Box, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import bgsofas from "../assets/imgs/bgsofas.jpg"
import bg from "../assets/imgs/bg.jpg"
import bg1 from "../assets/imgs/bg1.jpg"
import bg2 from "../assets/imgs/bg2.jpg"
import bg3 from "../assets/imgs/bg3.jpg"
import Heading from "../components/heading";
import { FaMapMarkerAlt, FaPhone, FaEnvelopeSquare } from "react-icons/fa"
import Product from "../components/product";
import { products } from "../data/products";


const Home = () => {

    return (
        <Box>
            <Flex justify="flex-end" align="center" position="relative">
                <Box w={[ null, "100%", "40%" ]} position="absolute" left={["0", "0", "10%"]} p="5%" ps={[ "5%", "5%", 0 ]} top={[ "0", "0", "auto" ]} bgColor={[ "blackAlpha.300", "blackAlpha.300", "whiteAlpha.700"]} color={[ "white", "white", "black" ]}>
                    <Text fontSize="40px" fontWeight="700" pb="15px" >Minimalistic and Modern Interior.</Text>
                    <Text fontSize="14px" fontWeight="600" mb="35px">Upgrade your personality with our quality products. You can never go wrong with any of our products. All have been created by our amazing designers to bring you the best you can get.</Text>
                    <Link href="/shop" fontSize="14px"  p="10px 20px" bgColor="orange.300" color="white" _hover={{ bgColor: "orange.500" }}>Shop now</Link>
                </Box>
                <Image src={bgsofas} w={[ "100%", "100%", "70%"]} minHeight={[ "500px", null ]} objectFit="cover"/>
            </Flex>

            <Box p={[ "10px", "40px"]} bgColor="gray.100">
                <Flex justify="space-around" flexWrap="wrap">
                    <Link href="#" display="flex" color="orange.300" alignItems="center" my={[ "15px", null ]}>
                        <FaMapMarkerAlt />
                        <Text px="2" color="black" fontWeight="600">1, Houston Str</Text>
                    </Link>
                    <Link href="#" display="flex" color="orange.300" alignItems="center" my={[ "15px", null ]}>
                        <FaPhone />
                        <Text px="2" color="black" fontWeight="600">+012 3456 789</Text>
                    </Link>
                    <Link href="#" display="flex" color="orange.300" alignItems="center" my={[ "15px", null ]}>
                        <FaEnvelopeSquare />
                        <Text px="2" color="black" fontWeight="600">Info@example.com</Text>
                    </Link>
                </Flex>
            </Box>

            <Box fontSize="14px" px={[ null, "10px", "5%", "10%" ]} m="10% 0 50px 0">
                <Text fontSize="20px" fontWeight="600" textAlign="center" color="orange">CATEGORIES</Text>
                <Flex justify="space-between" flexWrap="wrap" px={[ "10px", "20px", null ]}>
                    <Link href="#" w={[ "100%", "48%", "32%" ]} backgroundImage={`url(${bg1})`} bgSize="cover" display="flex" alignItems="stretch" my={[ "15px", null ]}>
                        <Box p="50px" w="100%">
                            <Text fontWeight="600" mb="20px">CHAIRS</Text>
                            <Text>Save <Badge colorScheme="orange">30%</Badge> now</Text>
                        </Box>
                    </Link>
                    <Link href="#" w={[ "100%", "48%", "32%" ]} backgroundImage={`url(${bg2})`} bgSize="cover" display="flex" alignItems="stretch" my={[ "15px", null ]}>
                        <Box p="50px" w="100%">
                            <Text fontWeight="600" mb="20px">TV STANDS</Text>
                            <Text>Save <Badge colorScheme="orange">50%</Badge> now</Text>
                        </Box>
                    </Link>
                    <Link href="#" w={[ "100%", "48%", "32%" ]} backgroundImage={`url(${bg3})`} bgSize="cover" display="flex" alignItems="stretch" my={[ "15px", null ]}>
                        <Box p="50px" w="100%">
                            <Text fontWeight="600" mb="20px">SOFAS</Text>
                            <Text>Save <Badge colorScheme="orange">20%</Badge> now</Text>
                        </Box>
                    </Link>
                </Flex>
            </Box>

            <Box py="5%" px={[ null, "0", "5%", "10%" ]}>
                <Heading mainText={"HOT DEALS FOR YOU"} subText={"Our customers most loved products you can also get."} />

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

            <Box py="5%" px={[ null, "0", "5%", "10%" ]} my="5%">
                <Flex justify="space-between" flexWrap="wrap">
                    <Box w={[ null, "100%", "40%" ]} p="5%" ps={[ "5%", "5%", 0 ]}>
                        <Text fontSize={[ "20px", "30px" ]} fontWeight="700" pb="15px" >Artistic Designs with unique shapes.</Text>
                        <Text fontSize="14px" fontWeight="600" mb="35px">Purpose of a furniture is to keep you comfortable while also beautifying your home</Text>
                        <Link href="/shop" fontSize="14px"  p="10px 20px" bgColor="orange.300" color="white" _hover={{ bgColor: "orange.500" }}>Shop now</Link>
                    </Box>
                    <Image src={bg} w={[ null, "100%", "60%" ]} alt="bg" border="5px" borderStyle="solid" borderColor="gray.300" />
                </Flex>
            </Box>

            <Box bgColor="gray.100" p="5%" mb="30px" fontSize="14px">
                <Heading mainText={"Subscribe To Our Newsletter"} />

                <Flex justify="center" align="center" m="auto" w="fit-content" p="2px" bgColor="white" border="1px" borderColor="gray.300" borderRadius="0">
                    <Input placeholder="Enter your email..." fontSize="14px" borderRadius="0" border="none" w={[ "100%", "100%", "300px" ]} />
                    <Link href="/" bgColor="orange.300" p="10px 25px" border="1px" borderColor="orange.300" color="white">
                        Subscribe
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}

export default Home;