import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import ConfigContext from 'context/configContext'

import { theme } from 'styles/config/themes'
import 'styles/main.scss'

import ErrorBoundary from 'pages/error/errorBoundary'

import RouterClinica from 'router'

function App() {
  const { theme: themeGlobal }: any = useContext(ConfigContext)
  return (
    <ThemeProvider theme={theme[themeGlobal]}>
      <ErrorBoundary>
        <SWRConfig value={{
          fetcher: (...args: any) => {
            const [url] = args
            return fetch(url)
              .then(res => res.json())
          }
        }}>
          <RouterClinica />
        </SWRConfig>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
