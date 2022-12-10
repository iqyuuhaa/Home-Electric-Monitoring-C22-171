import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login, getUserLogged, putAccessToken } from './../utils/network-data'
import { useToast, Box, Flex } from '@chakra-ui/react'

const LoginPage = ({ setAuthenticatedUser }) => {
  const nav = useNavigate()
  const toast = useToast()

  async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
        
        if (!error) {
            putAccessToken(data.accessToken)
            const respon = await getUserLogged()
            
            if (!respon.error) {
                setAuthenticatedUser(respon.data)
                nav('/dashboard')
                toast({
                  title: "Success",
                  description: `Welcome ${respon.data.name}`,
                  position: "bottom-right",
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
              })
            }
        }
        
      }

      return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
          <Box borderWidth={1} px={4} width='full' maxWidth='500px' borderRadius={4} textAlign='center' boxShadow='lg'>
            <Box p={4}>
            <h1>Login Page</h1>
              <p>Please enter your login and password!</p>
              <LoginInput login={onLogin} />
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </Box>
          </Box>
        </Flex>
      )
}

export default LoginPage