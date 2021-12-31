import styled from 'styled-components';

export const InputStyle = styled.div`
    label {
        color: ${({ theme: { colors } }) => colors.primary};
    }
    
    input {
        width: 100%;
        padding: 0 1rem;
        border-bottom: 1px solid;
        border-color: ${({ theme: { colors } }) => colors.primary};
        color: ${({ theme: { colors } }) => colors.grey_dark};

        &:focus,&:focus-visible {
            outline: ${({ theme: { colors } }) => colors.primary};
            border-bottom: 2px solid;
            border-color: ${({ theme: { colors } }) => colors.primary};
        }
    }
`