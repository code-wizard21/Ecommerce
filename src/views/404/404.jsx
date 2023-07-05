import { Box, Flex, Text } from "@chakra-ui/react"
import Button from "../../components/button/button";
import SearchBar from "../../components/searchbar/searchbar";

const ErrorPage = () => {
    return (
        <Flex flexDirection="column" justify="center" align="center" px={[ null, "10px", "5%", "10%" ]} m="10% 0 50px 0" >
            <Text mb="5" as="h1">Couldn't find the page</Text>
            <Text mb="5" color="brand.900" fontSize="70px" fontWeight="800">404 Error</Text>
            <Button mb="5" text={"Go back Home"} href="/" />
            <Text mb="5">or</Text>
            <SearchBar />
        </Flex>
    )
}

export default ErrorPage;