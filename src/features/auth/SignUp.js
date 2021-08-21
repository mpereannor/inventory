import React from 'react'
import { Button, Input } from '@chakra-ui/react'
// import { useForm } from "react-hook-form"
// import { connect, useSelector, useDispatch } from "react-redux"
// import { signUp, signIn, confirmSignUp, forgotPassword, forgotPasswordSubmit, authSelector } from "./authSlice"

import Container from '../../layouts/Container'

function SignUp({ signUp, updateFormState }) {
    // const { register, handleSubmit, setValue } = useForm();
    return (
        <Container>
            <Input variant="filled" name="username" placeholder="username" onChange={e => {e.persist(); updateFormState(e)}}/>
            <Input  type="password" name="password" placeholder="password" onChange={e => {e.persist(); updateFormState(e)}}/>
            <Input  name="email" placeholder="email" onChange={e => {e.persist(); updateFormState(e)}}/>
            <Button onClick={signUp} title="Sign Up">Sign Up</Button>
        </Container>
    )
}

export default SignUp
