import { Box, Link, Text } from "@chakra-ui/react";

const HeroSection = ({ mainText, subText }) => {
    return (
        <Box
            w={[ null, "100%", "40%" ]} 
            position="absolute" left={["0", "0", "10%"]} top={[ "0", "0", "auto" ]}
            p={"5%"} pt={[ "10%", "5%", "5%" ]} pb="80px" ps={[ "5%", "5%", 0 ]} 
            bgColor={[ "blackAlpha.600", "blackAlpha.600", "whiteAlpha.800"]} 
            color={[ "white", "white", "black" ]}
        >
            <Text fontSize="40px" lineHeight="50px" fontWeight="700" pb="15px" >{mainText}</Text>
            <Text fontSize="14px" lineHeight="30px" fontWeight="600" mb="35px">{subText}</Text>
            <Link href="/shop" 
                p="15px 25px" 
                borderRadius="2px"
                bgColor="brand.900" 
                color="white" 
                _hover={{ bgColor: "brand.800", color: "white" }}>
                    Shop now
            </Link>
        </Box>
    )
}

export default HeroSection;