import { Box, Text } from "@chakra-ui/react"

const Heading = ({ mainText, subText }) => {
    return (
        <Box textAlign="center" p="30px" mb="20px">
            <Text fontSize="25px" color="orange.300" lineHeight="40px" my="10px">{mainText}</Text>
            <Text fontWeight="600">{subText}</Text>
        </Box>
    )
}

export default Heading;