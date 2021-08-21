import React from 'react'
import { Button } from '@chakra-ui/button'
import { useForm } from "react-hook-form"
import { connect, useSelector, useDispatch } from "react-redux"
import { signUp, signIn, confirmSignUp, forgotPassword, forgotPasswordSubmit, authSelector } from "./authSlice"

import Container from '../../layouts/Container'
import { Input } from '@chakra-ui/input'

function ForgotPasswordSubmit({ forgotPasswordSubmit, updateFormState }) {
    const { register, handleSubmit, setValue } = useForm();
    return (
        <Container>
            <Input 
             name="confirmationCode" placeholder="Confirmation Code" onChange={e => {e.persist(); updateFormState(e)}}/>
            <Input 
             name="password" placeholder="New Password" type="password" onChange={e => {e.persist(); updateFormState(e)}}/>
            <Button onClick={forgotPasswordSubmit} title="Save New Password"/>
        </Container>
    )
}

export default ForgotPasswordSubmit
