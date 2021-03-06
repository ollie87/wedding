import styled from 'styled-components';

export const ParagraphWhiteMd = styled.p`
    text-align: center;
    color:  ${({ theme: { colors } }) => colors.white};
    font-size: 16px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
