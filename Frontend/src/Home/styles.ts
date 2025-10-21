import styled from "styled-components";

export const HomeContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme['body-background']};

    @media screen and (max-width: 40rem){
        input,div{
            max-width:40rem;
        }
    }

    @media screen and (max-width:26rem){
        input,div{
            max-width: 25rem;
        }
    }
`

export const Header = styled.header`
    width: 100%;
    height: 20rem;
    background-color: ${props=>props.theme['header-background']};
    
    h1{
        font-size: 3.7rem;
        text-align: center;
        margin-top: 5.6rem;
        color: ${props=>props.theme['light-green']};
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin-bottom:4rem;

    .sub-title{
        margin-top: 4.7rem;
        font-size: 2.7rem;
        color: ${props => props.theme['light-green']};
    }

    form{
        display: flex;
        flex-direction: column;
    }
`

