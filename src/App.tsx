import React from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { GlobalStyles } from 'theme/globalStyles'
import CustomThemeProvider from 'hooks/useTheme'

import { Topbar, MainPage } from 'components'

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
