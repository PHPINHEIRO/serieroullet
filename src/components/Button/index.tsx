import React from "react";
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Load } from './styles';

type ButtonProps = TouchableOpacityProps & {
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