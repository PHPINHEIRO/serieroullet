import React from "react";

import { Container, Title, Load } from './styles';

type ButtonProps = {
    title: string;
    isLoading: boolean;
}

export function Button( {title, isLoading = false, ...rest} : ButtonProps){
    return(
        <Container enabled={!isLoading} {...rest}>
            {isLoading ? <Load/> : <Title>{ title }</Title>}
        </Container>
    )
}