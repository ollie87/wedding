import styled from 'styled-components';

export const Title1 = styled.h1`
    font-size: 8rem;
    color:  ${({ theme: { colors } }) => colors.secondary};
    text-align: center;
    padding-top: 5rem;
    @media (max-width: 768px) {
        font-size: 5rem;
        padding-top: 2.5rem;
    }
`