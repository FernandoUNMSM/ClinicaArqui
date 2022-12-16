import { createContext, useState, useEffect } from 'react'

interface Config {
  theme?: any,
  changeTheme?: any,
}

const ConfigContext = createContext<Config>({})

export function ConfigContextProvider({ children }: any) {
  const [theme, setTheme] = useState('light')

  const changeTheme = (themeToChange: string) => {
    setTheme(themeToChange)
    localStorage.setItem('theme', JSON.stringify({ theme: themeToChange }))
  }
  useEffect(() => {
    const themeString: any = localStorage.getItem('theme')
    if (!themeString) return
    const themeJSON = JSON.parse(themeString)
    setTheme(themeJSON.theme)
  }, [])

  return <ConfigContext.Provider value={{
    theme,
    changeTheme
  }}>
    {children}
  </ConfigContext.Provider>
}
export default ConfigContext