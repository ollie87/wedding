import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme'
import HeadComponent from './HeadComponent'
import { GlobalStyle } from './Global'

const Layout = props => {
    return (
        <>
            <HeadComponent />
            <GlobalStyle theme={theme} />
            <ThemeProvider theme={theme}>
                <main className='grid grid-flow-row-dense grid-cols-1 grid-rows-1'>
                    <div className='container mx-auto'>
                        {props.children}
                    </div>
                </main>
            </ThemeProvider>
        </>
    )
}

export default Layout