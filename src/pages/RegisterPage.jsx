import React from "react"
import { Link, useNavigate } from "react-router-dom"
import RegisterInput from "../components/RegisterInput"
import { register } from "../utils/network-data"

const RegisterPage = () => {
    const nav = useNavigate()

    async function onRegisterHandler(user) {
        const { error } = await register(user)
        if (!error) {
            nav('/')
        }
      }
     
      return (
        <section className='register-page'>
          <h2>Register Page</h2>
          <RegisterInput register={onRegisterHandler} />
          <p>Have an Account?<Link to="/">Login</Link></p>
        </section>
      )
}

export default RegisterPage