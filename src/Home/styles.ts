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

export const InputText = styled.input`
    width: 63.5rem;
    height: 5.4rem;
    border-radius: 8px;
    border: none;
    background-color: ${props => props.theme['input-background']};
    margin-top: 1.8rem;
    font-size: 1.6rem;
    padding-left: 1.6rem;
    
    &:first-of-type{
        margin-top: -3rem;
    }
`

export const Button = styled.button`
    width: 13.4rem;
    height: 5.4rem;
    margin-top: 3.5rem;
    margin-left: auto;
    border-radius: 8px;
    border: none;
    background-color: ${props => props.theme['light-green']};
    font-size: 1.8rem;
    font-weight: bold;

    &:hover{
    background-color: ${props => props.theme['dark-green']};
    cursor: pointer;
    }

    &:disabled{
        cursor: not-allowed;
    }

`

export const ReminderDate = styled.div`
    width: 63.5rem;
    height: 5.4rem;
    display: flex;
    align-items: center;
    padding-left: 1.4rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme['light-green']};
    animation:date-apear 0.7s ease-in;

    @keyframes date-apear {
        from{
            transform: translateY(-50px);
            opacity: 0;
        }
        to{
            transform: translatey(0);
            opacity: 100%;
        }
    }

    span{
        font-size: 2.1rem;
    }      

`

export const RemindersEmpty = styled.div`
    background-color: ${props=>props.theme['input-background']};
    text-align: center;
    height: 10rem;
    margin-top: 2rem;
    border-radius: 8px;
    align-content: center;
    animation: apear 0.7s ease-in;

    span{
        font-size: 2rem;
        opacity: 45%;
    }


    @keyframes apear {
        from{
            transform: translateY(-100px);
            opacity: 0;
        }

        to{
            transform: translateY(0);
            opacity: 100%;
        }
    }
`