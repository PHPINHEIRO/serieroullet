import React from "react";
import { Container, Logo, Title } from "./style";
import { Button } from '../../components/Button'

import logoImg from '../../assets/images/logo.png'

export function Signin(){
    return(
        <Container>
            <Logo source={logoImg}></Logo>
            <Title>Login</Title>
            <Button
                title="Entrar com o Google"
                isLoading={false}
            />
        </Container>
    );
}