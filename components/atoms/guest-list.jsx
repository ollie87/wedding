import styled from 'styled-components';

export const GuestList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 700px;
    width: 95%;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 1rem 0 4rem 0;

    li {
        color: ${({ theme: { colors } }) => colors.primary};
        font-size: 2rem;
        span {
            font-weight: bold;
        }
    }
`