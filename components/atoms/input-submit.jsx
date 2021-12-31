import styled from 'styled-components';

export const InputSubmit = styled.input`
    background-color: ${({ theme: { colors } }) => colors.white};
    width: 150px;
    height: 40px;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: 1.8rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    border: 1px solid ${({ theme: { colors } }) => colors.primary};

    &:hover {
        cursor: pointer;
        background-color: ${({ theme: { colors } }) => colors.primary};
        color: ${({ theme: { colors } }) => colors.white};
    }
`