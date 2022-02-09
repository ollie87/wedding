import styled from 'styled-components';

export const SelectStyle = styled.div`
    label {
        color: ${({ theme: { colors } }) => colors.primary};
    }
    input {
        position: absolute;
        left: -9999em;
        top: -9999em;
        visibility: hidden;
        
        & + label {
            padding: .5em 1em;
            cursor: pointer;
            border: 2px solid ${({ theme: { colors } }) => colors.primary};
            border-top: 1px solid ${({ theme: { colors } }) => colors.primary};
            margin-right: -1px;
            color: ${({ theme: { colors } }) => colors.primary};
            background-color: ${({ theme: { colors } }) => colors.white};
            
        }
        
        &:checked + label, &:hover + label {
            background-color: ${({ theme: { colors } }) => colors.primary};
            color: ${({ theme: { colors } }) => colors.white};
            border: 1px solid ${({ theme: { colors } }) => colors.primary};
        }
    }
    
`;