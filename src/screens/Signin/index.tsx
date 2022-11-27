import React from "react";
import { Container, Logo } from "./style";
import * as AuthSession from 'expo-auth-session'

import { Button } from '../../components/Button'

import logoImg from '../../assets/images/logo.png'

type AuthResponse = {
    params: {
        access_token: string
    };
    type: string
}



async function handlerGoogleSignIn() {
    try {
        const CLIENT_ID = 'CLIENT_ID'
        const REDIRECT_URI = 'REDIRECT_URI'
        const SCOPE = encodeURI("profile email")
        const RESPONSE_TYPE = 'token'

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
        const {type , params } = await AuthSession.startAsync({authUrl}) as AuthResponse
        
        if (type === 'success') {
            const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
            const user = await response.json();
            console.log(user);
        }

    } catch (error) {
        console.log(error)
    }
}
  
export function Signin() {

return (
    <Container>
    <Logo source={logoImg}></Logo>
    <Button
        title="Entrar com Google"
        isLoading={false}
        onPress={handlerGoogleSignIn}
    />

    { /* <User /> */}
    </Container>
)
}