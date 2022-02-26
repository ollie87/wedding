import styled from 'styled-components';

export const ButtonNewGuest = styled.button`
    background-color: ${({ theme: { colors } }) => colors.white};
    width: 250px;
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