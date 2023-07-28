import React from 'react'
import styled from 'styled-components'

import { GlobalStyles } from './theme/globalStyles'
import Topbar from './components/Topbar/Topbar'
import MainPage from './components/MainPage/MainPage'
import CustomThemeProvider from './hooks/useTheme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return (
    <CustomThemeProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <GlobalStyles />

      <Page>
        <Topbar />

        <MainPage />
      </Page>
    </CustomThemeProvider>
  )
}

export default App
