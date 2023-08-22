import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle/index'
import theme from '../styles/theme/index'
import '../styles/janus-ds.css'


const GlobalProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default GlobalProvider
