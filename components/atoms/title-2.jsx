import styled from 'styled-components';

export const Title2 = styled.h2`
    font-size: 8rem;
    color:  ${({ theme: { colors } }) => colors.white};
    text-align: center;
    @media (max-width: 768px) {
        font-size: 5rem;
    }
` 