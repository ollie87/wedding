import styled from 'styled-components';

export const RoadMapTextPrimary = styled.h3`
    font-size: 3rem;
    color:  ${({ theme: { colors } }) => colors.primary};
    margin: 0;
    line-height: 0.8;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
` 