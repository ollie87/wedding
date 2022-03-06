import styled from 'styled-components';
export const ErrorStyle = styled.p`
    font-family: 'Casta-Thins', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    color: ${({ theme: { colors } }) => colors.tertiary};
    text-align: right;
    margin: 1rem 0;
`