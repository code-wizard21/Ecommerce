import { Alert, AlertDescription, AlertDialog, AlertDialogCloseButton, Box, Button, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState({status: "", msg: ""})

    const handlePasswordReset = () => {
        if(email === "") {
            setError({status: "error", msg: "Please enter your email address"})
        }
        else {
            sendPasswordResetEmail(auth, email)
            .then(() => {
                setError({status: "success", msg: "Password reset email sent!"})
            })
            .catch((error) => {
                setError({ error: error.message })
            })
        }
    }

    return (
        <Box px={[ null, "20px", "5%", "10%" ]} py={"5%"} textAlign={"center"} >
            <Heading py="20px">Forgot Password</Heading>
            <Text>Enter your email address. We will send you a code to reset your password</Text>

            {
                error.msg !== "" ?
                <Alert status={error.status} display={"flex"} justifyContent={"space-between"} w={[ "100%", "400px", "500px" ]} mx="auto" my="30px">
                    <AlertDescription>{error.msg}</AlertDescription>
                    <FaTimes onClick={() => setError({status: "", msg: ""})} />
                </Alert>
                :
                ""
            }
            
            <FormControl mt="4" w={[ "100%", "400px", "500px" ]} mx={"auto"} py="30px">
                
                <Flex align="center" w="100%" p="2px" border="1px" borderColor="gray.100" borderRadius="0">
                    <Button href="/" bgColor="gray.100" p="3" border="1px" borderRadius="0" borderColor="gray.100">
                        <FaEnvelope />
                    </Button>
                    <Input type="email" fontSize="14px" borderRadius="0" border="none" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)}/>
                </Flex>
            </FormControl>

            <Button fontSize="14px" borderRadius="2px" border="1px solid brand.900" bgColor="brand.900" color="white" mx="auto" w={["100%", "400px", "500px"]} mt="6" _hover={{ bgColor: "brand.800" }} onClick={() => handlePasswordReset()}>Reset Password</Button>

        </Box>
    )
}

export default ForgotPassword;