import React from "react"
import { Link, useNavigate } from "react-router-dom"
import RegisterInput from "../components/RegisterInput"
import { register } from "../utils/network-data"
import { Box, Flex, useToast } from '@chakra-ui/react'

const RegisterPage = () => {
    const nav = useNavigate()
    const toast = useToast()

    async function onRegisterHandler(user) {
        const { error } = await register(user)
        if (!error) {
            nav('/login')
            toast({
                title: "Success",
                description: "Success register account",
                position: "bottom-right",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
      }
     
      return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
        <Box borderWidth={1} px={4} width='full' maxWidth='500px' borderRadius={4} textAlign='center' boxShadow='lg'>
          <Box p={4}>
          <h1>Register Page</h1>
          <RegisterInput register={onRegisterHandler} />
          <p>Have an Account?<Link to="/login">Login</Link></p>
          </Box>
        </Box>
      </Flex>
      )
}

export default RegisterPage