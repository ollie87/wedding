
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-size: 1.6rem;
        line-height: 1.5;
        font-family: 'Casta-Thin', serif;
    }
    h1, h2, h3 {
        margin: 0 0 2rem 0;
        line-height: 1.5;
    }
    h1, h2 {
        font-family: 'Donitta', serif;
        font-weight: 400;
        color:  ${({ theme: { colors } }) => colors.grey_darkest};
    }
    label {
        font-family: 'Casta-Thin', serif;
        font-weight: 800;
        font-size: 20px;
    }
    h3 {
        font-family: 'PT Sans', serif;
        color:  ${({ theme: { colors } }) => colors.grey_medium};
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    p {
        color:  ${({ theme: { colors } }) => colors.grey_dark};
    }
    input, select, textarea {
        font-family: 'Casta-Thin', serif;
    }
`