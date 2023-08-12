import { Flex, Link, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const user = useSelector(state => state.data.user)

    return (
        <Flex px={[ null, "20px", "5%", "10%" ]} py="5%" minH={"90vh"}>
            <Tabs>
                <TabList>
                    {
                        ["Dashboard", "Orders", "Account", "Notifications"].map((tab, i) => (
                            <Tab key={i}>{tab}</Tab>
                        ))
                    }
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <p>Welcome: {user.email}</p>
                    </TabPanel>

                    <TabPanel>
                    <p>You have not placed any order. Visit the <Link color={"green.500"} href="/Shop">shop</Link> to add item to cart and place order.</p>
                    </TabPanel>

                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                </TabPanels>
                </Tabs>
        </Flex>
    )
}

export default Dashboard;