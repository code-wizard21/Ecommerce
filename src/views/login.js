import { Box, Flex, Text, Heading, FormControl, FormLabel, Input, Link, Button, Switch } from "@chakra-ui/react"
import { useState } from "react";
import { FaEnvelope, FaEye, FaLock } from "react-icons/fa";
import bg from "../assets/imgs/bg.jpg"

const Login = () => {
    const [ type, setType ] = useState(true)

    return (
        <Flex m="20px" justify="center" fontSize="14px" backgroundImage={`url(${bg})`} bgSize="cover">
            <Flex justify="center" w="100%" bgColor="whiteAlpha.500">
                <Box w={[ "100%", "400px", "500px" ]} p="20px" m="20px" bgColor="white">
                    <Heading textAlign="center">Welcome back!</Heading>
                    <Text textAlign="center" fontWeight="600" py="3">Enter your email and password.</Text>


                    <FormControl mt="4">
                        <FormLabel fontSize="14px">Email address </FormLabel>
                        
                        <Flex align="center" w="100%" p="2px" border="1px" borderColor="gray.100" borderRadius="0">
                            <Button href="/" bgColor="gray.100" p="3" border="1px" borderRadius="0" borderColor="gray.100">
                                <FaEnvelope />
                            </Button>
                            <Input type="email" fontSize="14px" borderRadius="0" border="none" />
                        </Flex>
                    </FormControl>

                    <FormControl mt="4">
                        <FormLabel fontSize="14px">Password </FormLabel>
                        
                        <Flex align="center" w="100%" p="2px" border="1px" borderColor="gray.100" borderRadius="0">
                            <Button href="/" bgColor="gray.100" p="3" border="1px" borderRadius="0" borderColor="gray.100">
                                <FaLock />
                            </Button>
                            <Input type={(type)? "password": "text"} fontSize="14px" borderRadius="0" border="none" />
                            <Button p="3" border="1px" borderRadius="0" borderColor="gray.100" bgColor="white" onClick={() => setType(!type)}>
                                <FaEye />
                            </Button>
                        </Flex>
                    </FormControl>

                    <Flex justify="space-between" my="5">
                        <FormControl display="flex" align="center">
                            <Switch size="sm" id="remember" colorScheme="orange" />
                            <FormLabel htmlFor="remember" ms="2" fontSize="12px">Remember me</FormLabel>
                        </FormControl>
                        <Link w="150px" fontSize="12px" color="red">Forgot password?</Link>
                    </Flex>

                    <Button fontSize="14px" borderRadius="2px" border="1px solid rgb(228, 99, 13)" bgColor="rgb(228, 99, 13)" color="white" w="100%" mt="6" _hover={{ bgColor: "orange.400" }}>Login</Button>

                    <Text mt="4">Don't have an account yet? <Link href="/register" color="rgb(228, 99, 13)">Sign up</Link></Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Login;