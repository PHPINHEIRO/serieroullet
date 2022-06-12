import styled, {css} from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    flex:1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.SECONDARY };
`;

export const Title = styled.Text`
    font-size: 16px ;
    
    ${({theme}) => css`
        color: ${theme.COLORS.TITLE};
        font-family: ${theme.FONTS.TITLE};
    `};
`;

export const Load = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.TITLE
}))``;

