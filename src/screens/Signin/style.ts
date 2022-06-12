import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 24px ;
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND };
`;

export const Title = styled.Text`
    font-size: 48px;
    margin-bottom: 90px;
    align-self: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.SECONDARY}
    `};
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 340px;
    align-self: center;
`
