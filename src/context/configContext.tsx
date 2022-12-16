import useSelect from 'hooks/useSelect'
import { createContext, useState, useEffect } from 'react'

interface Config {
  quantityPerPage?: any,
  setQuantityPerPage?: any,
  page?: any,
  setPage?: any,
  totalItems?: any,
  setTotalItems?: any,
  searchValue?: any,
  setSearchValue?: any,
  theme?: any,
  changeTheme?: any,
  advanceSearch?: any
}

const ConfigContext = createContext<Config>({})

export function ConfigContextProvider({ children }: any) {
  const advanceSearch = useSelect()
  const [quantityPerPage, setQuantityPerPage] = useState(25)
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(10)
  const [searchValue, setSearchValue] = useState('')
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
    advanceSearch,
    quantityPerPage,
    setQuantityPerPage,
    page,
    setPage,
    totalItems,
    setTotalItems,
    searchValue,
    setSearchValue,
    theme,
    changeTheme
  }}>
    {children}
  </ConfigContext.Provider>
}
export default ConfigContext