import React from 'react'
import { Button, Input } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { connect, useSelector, useDispatch } from "react-redux"
import { signUp, signIn, confirmSignUp, forgotPassword, forgotPasswordSubmit, authSelector } from "./authSlice"

import Container from '../../layouts/Container'

function ConfirmSignUp({ confirmSignUp, updateFormState }) {
    const { register, handleSubmit, setValue } = useForm();
    return (
        <Container>
            <Input 
             name="confirmationCode" placeholder="Confirmation Code" onChange={e => {e.persist(); updateFormState(e)}}/>
            <Button onClick={confirmSignUp} title="Confirm Sign Up"/>
        </Container>
    )
}

export default ConfirmSignUp
