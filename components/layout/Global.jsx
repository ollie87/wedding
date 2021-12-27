
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
        font-family: 'PT Sans', serif;
    }
    h1, h2, h3 {
        margin: 0 0 2rem 0;
        line-height: 1.5;
    }
    h1, h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        color:  ${({ theme: { colors } }) => colors.grey_darkest};
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
`