import { Box, Flex, Text, Heading, FormControl, FormLabel, Input, Link, Button } from "@chakra-ui/react"
import { useState } from "react";
import { FaEnvelope, FaEye, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import bg from "../assets/imgs/bg.jpg"
import { signUp } from "../firebase";
import { userSignup } from "../redux/slice/authSlice";

const Register = () => {
    const [ type, setType ] = useState(true)
    const [ cpasswordtype, setCpasswordtype ] = useState(true)
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleRegister = () => {
        signUp(email, password)
        .then(result => {
            dispatch(userSignup(result.email));
            navigate("/dashboard")
        })
        .catch(error => console.log(error))
    }

    return (
        <Flex m="20px" justify="center" fontSize="14px" backgroundImage={`url(${bg})`} bgSize="cover">
            <Flex justify="center" w="100%" bgColor="whiteAlpha.500">
            <Box p="20px" w={[ "100%", "400px", "500px" ]} m="20px" bgColor="white">
                <Heading textAlign="center">Register!</Heading>
                <Text textAlign="center" fontWeight="600" py="3">Fill in your details to signup.</Text>

                <FormControl mt="4">
                    <FormLabel fontSize="14px">Email address </FormLabel>
                    
                    <Flex align="center" w="100%" p="2px" border="1px" borderColor="gray.100" borderRadius="0">
                        <Button href="/" bgColor="gray.100" p="3" border="1px" borderRadius="0" borderColor="gray.100">
                            <FaEnvelope />
                        </Button>
                        <Input type="email" fontSize="14px" borderRadius="0" border="none" onChange={(e) => setEmail(e.target.value)} />
                    </Flex>
                </FormControl>

                <FormControl mt="4">
                    <FormLabel fontSize="14px">Password </FormLabel>
                    
                    <Flex align="center" w="100%" p="2px" border="1px" borderColor="gray.100" borderRadius="0">
                        <Button href="/" bgColor="gray.100" p="3" border="1px" borderRadius="0" borderColor="gray.100">
                            <FaLock />
                        </Button>
                        <Input type={(type)? "password": "text"} fontSize="14px" borderRadius="0" border="none" onChange={(e) => setPassword(e.target.value)} />
                        <Button p="3" border="1px" borderRadius="0" borderColor="gray.100" bgColor="white" onClick={() => setType(!type)}>
                            <FaEye />
                        </Button>
                    </Flex>
                </FormControl>

                <FormControl mt="4">
                    <FormLabel fontSize="14px">Confirm Password </FormLabel>
                    
                    <Flex align="center" w="100%" p="2px" border="1px" borderColor="gray.100" borderRadius="0">
                        <Button href="/" bgColor="gray.100" p="3" border="1px" borderRadius="0" borderColor="gray.100">
                            <FaLock />
                        </Button>
                        <Input type={(cpasswordtype)? "password": "text"} fontSize="14px" borderRadius="0" border="none" />
                        <Button p="3" border="1px" borderRadius="0" borderColor="gray.100" bgColor="white" onClick={() => setCpasswordtype(!cpasswordtype)}>
                            <FaEye />
                        </Button>
                    </Flex>
                </FormControl>

                <Button fontSize="14px" borderRadius="2px" border="1px solid brand.900" bgColor="brand.900" color="white" w="100%" mt="6" _hover={{ bgColor: "orange.400" }} onClick={() => handleRegister()}>Sign up</Button>

                <Text mt="4">Already have an account? <Link href="/Login" color="brand.900">Login</Link></Text>
            </Box>
            </Flex>
        </Flex>
    )
}

export default Register;