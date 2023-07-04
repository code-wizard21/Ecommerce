import { Box, Flex, Input, Link, Select, Text, FormControl, FormLabel } from "@chakra-ui/react"
import Heading from "../../components/heading/heading";
import { Country, State, City } from "country-state-city";
import { useState } from "react";

const Checkout= () => {
    const [countryCode, setCountryCode] = useState("AF")
    const [stateCode, setStateCode] = useState("BDS")

    return (
        <Box py="50px" px={[ "20px", "20px", "10%" ]}>
            <Heading mainText={"CHECKOUT"} subText={"Order your products by filling the neccessary information."} />

            <Flex flexWrap="wrap">
                <Box w={["100%", "100%", "60%"]} fontSize="14px" >
                    <Box p="20px" bgColor="#f3f3f3">
                    <Text fontWeight="700" fontSize="18px" mb="3" p="2" color="brand.900">ORDER NOW</Text>
                    <form method="post" action="/">
                        <Box bgColor="white" p="20px">
                            <Box>
                                <h2>
                                    <Box flex="1" p="1" textAlign="left">Personal Details</Box>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Fullname:</FormLabel>
                                        <Input type="text" name="fullname" my="1" fontSize="14px" borderRadius="0" />
                                    </FormControl>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Email address:</FormLabel>
                                        <Input type="text" name="email" my="1" fontSize="14px" borderRadius="0" />
                                    </FormControl>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Company (optional):</FormLabel>
                                        <Input type="text" name="company" my="1" fontSize="14px" borderRadius="0" />
                                    </FormControl>
                                </h2>
                            </Box>

                            <Box my="4">
                                <h2>
                                    <Box flex="1" p="1" textAlign="left">Shipping Details</Box>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Shipping address:</FormLabel>
                                        <Input type="text" name="address" my="1" fontSize="14px" borderRadius="0" />
                                    </FormControl>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Address:</FormLabel>
                                        <Input type="text" name="state" my="1" fontSize="14px" borderRadius="0" />
                                    </FormControl>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="0px" left="17px" >Country:</FormLabel>
                                        <Select onChange={(e) => setCountryCode(e.target.value)} fontSize="14px" borderRadius="0">
                                            {
                                                Country.getAllCountries().map((country, index) => {
                                                    return (
                                                        <option value={country.isoCode} key={index}>{country.name}</option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="5px" left="17px" >State:</FormLabel>
                                        <Select onChange={(e) => setStateCode(e.target.value)}  my="1" fontSize="14px" borderRadius="0">
                                            {
                                                State.getStatesOfCountry(countryCode).map((state, index) => {
                                                    return (
                                                        <option value={state.isoCode} key={index}>{state.name}</option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >City:</FormLabel>
                                        <Select my="1" fontSize="14px" borderRadius="0">
                                            {
                                                City.getCitiesOfState(countryCode, stateCode).map((city, index) => {
                                                    return (
                                                        <option value={city.isoCode} key={index}>{city.name}</option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                    <FormControl my="5">
                                        <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Phone number:</FormLabel>
                                        <Input type="tel" name="phone" my="1" fontSize="14px" borderRadius="0" />
                                    </FormControl>
                                </h2>
                            </Box>
                        </Box>
                    </form>
                    </Box>
                </Box>

                <Box w={["100%", "100%", "36%"]} border="1px solid #f4f4f4" fontSize="14px" p="20px" mx={[0, 0, "2%"]} >
                    <Box>
                        <FormControl my="5">
                            <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Name on card:</FormLabel>
                            <Input type="text" name="cardName" borderRadius="0" />
                        </FormControl>
                        <FormControl my="5">
                            <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Card number:</FormLabel>
                            <Input type="text" name="CardNumber" borderRadius="0" />
                        </FormControl>
                        <Select name="type" borderRadius="0" my="5">
                            <option>Visa</option>
                            <option>Mastercard</option>
                            <option>American Express</option>
                        </Select>
                        <Flex my="5" justify="space-between">
                            <FormControl w="70%">
                                <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >Expiry date:</FormLabel>
                                <Input type="text" name="expiry" my="0" me="1" borderRadius="0" />
                            </FormControl>
                            <FormControl w="25%">
                                <FormLabel fontSize="12px" color="gray.400" top="7px" left="17px" >CVV:</FormLabel>
                                <Input type="text" name="cvv" borderRadius="0" />
                            </FormControl>
                        </Flex>
                        
                    </Box>

                    <Flex m="20px 0" bgColor="white" p="10px 0">
                        <Link href="/order" p="12px" w="100%" textAlign="center" borderRadius="2px" color="white" bgColor="brand.900">Place order</Link>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}

export default Checkout;