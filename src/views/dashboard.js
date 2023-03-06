import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const user = useSelector(state => state.data.user)

    return (
        <Flex>
            {user.email}
        </Flex>
    )
}

export default Dashboard;