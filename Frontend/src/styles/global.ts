import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding:0;
        color:white;
        font-family: 'Roboto',sans-serif;
        font-size: 10px;
    }
    
    body{
        background-color: ${props => props.theme['body-background']};
    }
    
`