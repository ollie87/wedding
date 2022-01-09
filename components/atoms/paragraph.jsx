import styled from 'styled-components';

export const Paragraph = styled.p`
    text-align: center;
    color:  ${({ theme: { colors } }) => colors.primary};
`;
