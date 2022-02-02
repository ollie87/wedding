import styled from 'styled-components';

export const Title3 = styled.h3`
    font-size: 3rem;
    color:  ${({ theme: { colors } }) => colors.white};
    text-align: center;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
` 