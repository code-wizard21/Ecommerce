import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Heading from "../components/heading"

const Dashboard = () => {
    const user = useSelector((state) => state.data);

    useEffect(() => {
        console.log(user)
    })

    return (
        <Box>
            <Flex>
                <Box w={["100%", "100%", "350px"]} position={["fixed", "fixed", "initial"]}>
                    navbar
                </Box>

                <Box flex="1">
                    <Heading mainText={"DASHBOARD"} subText={`Welcome to your account.`}/>
                </Box>
            </Flex>
        </Box>
    )
}

export default Dashboard;