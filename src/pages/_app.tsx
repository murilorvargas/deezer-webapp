import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify';
import { wrapper } from '../store'

import "react-toastify/dist/ReactToastify.css";
import { SidebarProvider } from '../context/SidebarContext';

import Header from '../components/Header'

import { GlobalStyle } from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SidebarProvider>
        <Header/>
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer 
          toastClassName="colored-toast"
          autoClose={5000}
        />
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
