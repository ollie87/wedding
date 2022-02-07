import styled from 'styled-components';

export const RoadMapTextSecondary = styled.h3`
    color:  ${({ theme: { colors } }) => colors.secondary};
    margin: 0;
    font-size: 1.6rem;
    @media (max-width: 768px) {
        display: none;
    }
` 