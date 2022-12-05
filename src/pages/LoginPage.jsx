import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login, getUserLogged, putAccessToken } from './../utils/network-data'

const LoginPage = ({ setAuthenticatedUser }) => {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
        
        if (!error) {
            putAccessToken(data.accessToken)
            const {isError, user} = await getUserLogged()
            console.log(user)
            if (!isError) {
                setAuthenticatedUser(user)
            }
        }
        
      }
     
      return (
        <section className='login-page'>
          <h2>Login Page</h2>
          <p>Please enter your login and password!</p>
          <LoginInput login={onLogin} />
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </section>
      );
}

export default LoginPage