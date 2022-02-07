import styled from 'styled-components';

export const DateStyle = styled.div`
    width: 100%;
    height: 400px;
    background: url("/img/campo.jpg");
    background-position: center;
    background-size: 100% auto;
    background-position-y: 32%;
    filter: saturate(0.4);
    opacity: 90%;
    @media (max-width: 768px) {
        padding-top: 4rem;
        height: 250px;
    }
`