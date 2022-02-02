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
                <main className='lg:grid lg:grid-flow-row-dense lg:grid-cols-1 lg:grid-rows-1'>
                    <div className='lg:container lg:mx-auto lg:justify-center'>
                        {props.children}
                    </div>
                </main>
            </ThemeProvider>
        </>
    )
}

export default Layout