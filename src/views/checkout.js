import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Input, Text } from "@chakra-ui/react"
import Heading from "../components/heading";

const Checkout= () => {
    return (
        <Box py="50px" px={[ "20px", "20px", "10%" ]}>
            <Heading mainText={"CHECKOUT"} subText={"Order your products by filling the neccessary information."} />

            <Flex flexWrap="wrap">
                <Box w={["100%", "100%", "60%"]} fontSize="14px" >
                    <Box p="20px" bgColor="#f3f3f3">
                    <Text fontWeight="700" fontSize="18px" mb="3" color="orange.300">ORDER NOW</Text>
                    <Accordion defaultIndex={[0]} allowMulitple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left" cursor="pointer">Personal Details</Box>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Input placeholder="Fullname" my="1" fontSize="14px" borderRadius="0" />
                                <Input placeholder="Email Address" my="1" fontSize="14px" borderRadius="0" />
                                <Input placeholder="Company (optional)" my="1" fontSize="14px" borderRadius="0" />
                            </AccordionPanel>
                            </h2>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">Shipping Details</Box>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Input placeholder="Shipping Address" my="1" fontSize="14px" borderRadius="0" />
                                <Input placeholder="Email Address" my="1" fontSize="14px" borderRadius="0" />
                                <Input placeholder="Address" my="1" fontSize="14px" borderRadius="0" />
                                <Input placeholder="State" my="1" fontSize="14px" borderRadius="0" />
                                <Input placeholder="Local Government" my="1" fontSize="14px" borderRadius="0" />
                                <Input placeholder="Zip code" my="1" fontSize="14px" borderRadius="0" />
                                <Input placeholder="Phone number" my="1" fontSize="14px" borderRadius="0" />
                            </AccordionPanel>
                            </h2>
                        </AccordionItem>
                    </Accordion>

                    </Box>
                </Box>

                <Box w={["100%", "100%", "36%"]} border="1px solid #f4f4f4" fontSize="14px" p="20px" mx="2%" >
                    
                </Box>
            </Flex>
        </Box>
    )
}

export default Checkout;