import styled from "styled-components";

export const CardContainer = styled.div`
    height: 5.4rem;
    background-color: ${props=>props.theme['input-background']};
    border-radius: 8px;
    display: flex;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0 1.6rem 0 1.6rem;
    transition: ease-in;
    animation: card-apear 0.7s ease-in;

    @keyframes card-apear {

        from{
            transform: translateX(-100px);
            opacity: 0;
        }
        
        to{
            transform: translateX(0);
            opacity: 100%;
        }
    }

    span{
        font-size: 1.6rem;
    }

    svg{
        margin-left: auto;
        cursor: pointer;
    }
`
export const SkeletonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 3rem;
    span{
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius:8px
    }
`