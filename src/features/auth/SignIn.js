import React from 'react'
import { Button } from '@chakra-ui/button'
// import { useForm } from "react-hook-form"
// import { connect, useSelector, useDispatch } from "react-redux"
// import { signUp, signIn, confirmSignUp, forgotPassword, forgotPasswordSubmit, authSelector } from "./authSlice"

import Container from '../../layouts/Container'
import { Input } from '@chakra-ui/react'

function SignIn({ signIn, updateFormState }) {
    // const { register, handleSubmit, setValue } = useForm();
    return (
        <Container>
            <Input name="username" placeholder="username" onChange={e => {e.persist(); updateFormState(e)}}/>
            <Input type="password" name="password" placeholder="password" onChange={e => {e.persist(); updateFormState(e)}}/>
            <Button onClick={signIn} title="Sign In"/>
        </Container>
    )
}

export default SignIn
