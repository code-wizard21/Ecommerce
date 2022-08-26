import { Badge, Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import bgsofas from "../assets/imgs/bgsofas.jpg"
import bg from "../assets/imgs/bg.jpg"
import Heading from "../components/heading";
import { FaMapMarkerAlt, FaPhone, FaEnvelopeSquare } from "react-icons/fa"
import Product from "../components/product";
import { products } from "../data/products";


const Home = () => {

    return (
        <Box px={[ null, "0", "5%", "10%" ]}>
            <Flex justify="flex-end" align="center" position="relative">
                <Box w={[ null, "100%", "40%" ]} position="absolute" left="0" p="5%" ps={[ "5%", "5%", 0 ]} top={[ "30px", "30px", "auto" ]} bgColor={[ "blackAlpha.300", "blackAlpha.300", "whiteAlpha.700"]} color={[ "white", "white", "black" ]}>
                    <Text fontSize="40px" fontWeight="700" pb="5%" >Minimalistic and Modern Interior.</Text>
                    <Text fontSize="14px" fontWeight="600">Upgrade your personality with our quality products. You can never go wrong with any of our products. All have been created by our amazing designers to bring you the best you can get.</Text>
                    <Button fontSize="14px" colorScheme="orange" mt="6" borderRadius="0">Shop now</Button>
                </Box>
                <Image src={bgsofas} w={[ "100%", "100%", "80%"]} minHeight={[ "500px", null ]} objectFit="cover"/>
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

            <Box fontSize="14px">
                <Heading mainText={"CATEGORIES"} />
                <Flex justify="space-between" flexWrap="wrap" px={[ "10px", "20px", null ]}>
                    <Link href="#" p="5%" w={[ "100%", "48%", "32%" ]} backgroundImage={`url(${bgsofas})`} bgSize="cover" display="flex" alignItems="stretch" my={[ "15px", null ]}>
                        <Box color="white" p="2" bgColor="blackAlpha.700">
                            <Text fontWeight="600" color="orange.300" mb="20px">SOFAS</Text>
                            <Text>Save <Badge colorScheme="orange">30%</Badge> now</Text>
                        </Box>
                    </Link>
                    <Link href="#" p="5%" w={[ "100%", "48%", "32%" ]} backgroundImage={`url(${bg})`} bgSize="cover" display="flex" alignItems="stretch" my={[ "15px", null ]}>
                        <Box color="white" p="2" bgColor="blackAlpha.700">
                            <Text fontWeight="600" color="orange.300" mb="20px">CHAIRS</Text>
                            <Text>Save <Badge colorScheme="orange">50%</Badge> now</Text>
                        </Box>
                    </Link>
                    <Link href="#" p="5%" w={[ "100%", "48%", "32%" ]} backgroundImage={`url(${bgsofas})`} bgSize="cover" display="flex" alignItems="stretch" my={[ "15px", null ]}>
                        <Box color="white" p="2" bgColor="blackAlpha.700">
                            <Text fontWeight="600" color="orange.300" mb="20px">LAMPS</Text>
                            <Text>Save <Badge colorScheme="orange">20%</Badge> now</Text>
                        </Box>
                    </Link>
                </Flex>
            </Box>

            <Box py="5%">
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

            <Box py="5%" my="5%">
                <Flex justify="space-between" flexWrap="wrap">
                    <Box w={[ null, "100%", "40%" ]} p="5%" ps={[ "5%", "5%", 0 ]}>
                        <Text fontSize={[ "20px", "30px", "40px"]} fontWeight="700" pb="5%" >Artistic Designs with unique shapes.</Text>
                        <Text fontSize="14px" fontWeight="600">Purpose of a furniture is to keep you comfortable while also beautifying your home</Text>
                        <Button fontSize="14px" colorScheme="orange" mt="6" borderRadius="0">Shop now</Button>
                    </Box>
                    <Image src={bg} w={[ null, "100%", "60%" ]} alt="bg" border="5px" borderStyle="solid" borderColor="gray.300" />
                </Flex>
            </Box>
        </Box>
    )
}

export default Home;