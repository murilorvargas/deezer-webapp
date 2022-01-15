import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '../store'
import Header from '../components/Header'

import { GlobalStyle } from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
