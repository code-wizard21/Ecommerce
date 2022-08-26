import { Box, Flex, Text, Heading, FormControl, FormLabel, Input, Link, Button, Switch } from "@chakra-ui/react"
import { useState } from "react";
import { FaEnvelope, FaEye, FaLock } from "react-icons/fa";

const Login = () => {
    const [ type, setType ] = useState(true)

    return (
        <Flex m="50px 10%" justify="center" fontSize="14px">
            <Box>
                <Heading textAlign="center">Welcome back!</Heading>
                <Text textAlign="center" fontWeight="600" py="3">Enter your email and password.</Text>


                <FormControl mt="4">
                    <FormLabel fontSize="14px">Email address </FormLabel>
                    
                    <Flex align="center" w={[ "100%", "300px" ]} p="2px" border="1px" borderColor="gray.100" borderRadius="0">
                        <Button href="/" bgColor="gray.100" p="3" border="1px" borderRadius="0" borderColor="gray.100">
                            <FaEnvelope />
                        </Button>
                        <Input type="email" fontSize="14px" borderRadius="0" border="none" />
                    </Flex>
                </FormControl>

                <FormControl mt="4">
                    <FormLabel fontSize="14px">Password </FormLabel>
                    
                    <Flex align="center" w={[ "100%", "300px" ]} p="2px" border="1px" borderColor="gray.100" borderRadius="0">
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

                <Button fontSize="14px" borderRadius="2px" border="1px solid orange" colorScheme="orange" w="100%" mt="6">Login</Button>

                <Text mt="4">Don't have an account yet? <Link href="/register" color="orange.300">Sign up</Link></Text>
            </Box>
        </Flex>
    )
}

export default Login;