import styled from 'styled-components';

export const RoadMapTextBus = styled.h3`
    font-size: 2rem;
    color:  ${({ theme: { colors } }) => colors.primary};
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.primary}; 
    line-height: 0.1em;
    margin: 10px 0 20px;

    span {
        background:#fff; 
        padding: 0 10px; 
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
        border-bottom: unset;
        margin: 0;
        line-height: 2rem;
        span {
            
        }
    }
` 