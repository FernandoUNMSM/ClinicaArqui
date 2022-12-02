import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

interface User {
  userInfo?: any,
  isLogin?: any,
  setIsLogin?: any,
  loginUser?: any,
  logOut?: any
}

const UserContext = createContext<User>({})

export function UserContextProvider({ children }: any) {
  const [userInfo, setUserInfo]: any = useState({})
  const [isLogin, setIsLogin]: any = useState(true)
  const navigate = useNavigate()

  const loginUser = (userData: any) => {
    setUserInfo(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  useEffect(() => {
    const userString: any = localStorage.getItem('user')
    if (userString) {
      const userLogged = JSON.parse(userString)
      setUserInfo(userLogged)
      setIsLogin(true)
    } else {
      localStorage.removeItem('user')
      setIsLogin(false)
    }
  }, [])

  const logOut = () => {
    localStorage.removeItem('user')
    setIsLogin(false)
    navigate('/login')
  }

  return <UserContext.Provider value={{ userInfo, loginUser, isLogin, setIsLogin, logOut }} >
    {children}
  </UserContext.Provider>
}

export default UserContext