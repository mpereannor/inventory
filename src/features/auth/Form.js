import React, { useState } from "react";
// import Router from "next/router";
import { Auth } from "aws-amplify";

// import { useForm } from "react-hook-form";
// import { connect, useSelector, useDispatch } from "react-redux";

// import { signUp, signIn, confirmSignUp, forgotPassword, forgotPasswordSubmit, authSelector } from "./authSlice"

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ConfirmSignUp from "./ConfirmSignUp";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";

import Container from "../../layouts/Container";

async function signIn({ username, password }, setUser) {
    try { 
        const user = await Auth.signIn(username, password)
        const userInfo = { 
            username : user.username,
             ...user.attributes
            }
            setUser(userInfo)
    } catch(err) { 
        console.log(`error signing up...`, err)
    }
}

async function signUp({ username, password, email }, updateFormType) {
    try {
        await Auth.signUp({ 
            username, password, attributes: { email }
        })      
        console.log(`sign up success!`)
        updateFormType(`confirmSignUp`)
    } catch (err) {
        console.log(`error signing up..`, err)
    }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) { 
    try {
        await Auth.confirmSignUp(username, confirmationCode )
        updateFormType(`signIn`)
    } catch (err) {
        console.log(`error signing up..`, err)
    }
}

async function forgotPassword({ username }, updateFormType) { 
    try {
        await Auth.forgotPassword(username)
        updateFormType(`forgotPasswordSubmit`)
    } catch (err) {
        console.log(`error submitting username to reset password...`, err)
    }
}

async function forgotPasswordSubmit({ username, confirmationCode, password }, updateFormType) {
    try {
        await Auth.forgotPasswordSubmit(username, confirmationCode, password);
        updateFormType(`signIn`)
    } catch (err) {
        console.log(`error updating password... `, err)
    }
}

const initialFormState = {
    username: '', password: '', email: '', confirmationCode: ''
  }

function Form(props) {
//   const dispatch = useDispatch();
//   const { register, handleSubmit, errors, setValue } = useForm();
  
  const [formType, updateFormType] = useState("signIn");
//   const onSubmit = (data) => {
//       dispatch(se())
//   }
  const [formState, updateFormState] = useState(initialFormState);

  function updateForm(event) {
      const newFormState = { 
          ...formState, [event.target.name]: event.target.value
      }
      updateFormState(newFormState)
  }

  function renderForm() {
      switch (formType) {
          case `signUp`:
              return (
                  <SignUp
                  signUp={() => signUp(formState, updateFormType)}
                  updateFormState={e => updateForm(e)}
                  />
              )
            
            case `confirmSignUp`:
                return (
                    <ConfirmSignUp
                    confirmSignUp={() => confirmSignUp(formState, updateFormType)}
                    updateFormState={e => updateForm(e)}
                    />
                )
            case `signIn`:
                return(
                    <SignIn
                    signIn={() => signIn(formState, props.setUser)}
                    updateFormState={e => updateForm(e)}
                    />
                )
            case `forgotPassword`:
                return(
                    <ForgotPassword
                    forgotPassword={() => forgotPassword(formState, updateFormType)}
        updateFormState={e => updateForm(e)}
                    
                    />
                )
            case `forgotPasswordSubmit`:
                return (
                    <ForgotPasswordSubmit
                    forgotPasswordSubmit={
                      () => forgotPasswordSubmit(formState, updateFormType)}
                    updateFormState={e => updateForm(e)}
                  />
                )
      
          default:
              return null;
      }
  }

  return <Container alignItems="center" mt="150">{renderForm()}
  {     
    formType === `signUp` && (
        <p>Already have an account? <span onClick={() => updateFormType(`signIn`)}>Sign In</span></p>
    )
    }
    {
        formType === `signIn` && (
            <>
                <p>Need an account? <span onClick={() =>updateFormType(`signUp`)}>Sign Up</span></p>
                <p>Forgot your Password? <span onClick={ () => updateFormType(`forgotPassword`)}>Reset Password</span></p>
            </>
        )
    }
  </Container>;
}

export default Form;
