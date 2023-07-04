import { Box, CircularProgress, Flex, keyframes } from "@chakra-ui/react"
import { motion } from "framer-motion"

const animationKeyframes = keyframes `
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
`

const animation = `${animationKeyframes} 1s linear infinite`


const Loader = () => {
    return (
        <Flex h={"80vh"} color={"brand.900"}>
            <Flex w={"100%"} h="100%" justify={"center"} align={"center"}>
                <Box as={motion.div} animation={animation}>
                    <CircularProgress value={30} color={"brand.900"} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Loader