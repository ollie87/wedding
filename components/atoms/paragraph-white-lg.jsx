import styled from 'styled-components';

export const ParagraphWhiteLg = styled.p`
    text-align: center;
    color:  ${({ theme: { colors } }) => colors.white};
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
