import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

interface Partner {
  partnerInfo?: any,
  isLogin?: any,
  setIsLogin?: any,
  loginPartner?: any,
  logOut?: any
}

const PartnerContext = createContext<Partner>({})

export function PartnerContextProvider({ children }: any) {
  const [partnerInfo, setPartnerInfo]: any = useState({})
  const [isLogin, setIsLogin]: any = useState(true)
  const navigate = useNavigate()

  const loginPartner = (partnerData: any) => {
    setPartnerInfo(partnerData)
    localStorage.setItem('partner', JSON.stringify(partnerData))
    setIsLogin(true)
  }

  useEffect(() => {
    const partnerString: any = localStorage.getItem('partner')

    if (partnerString) {
      const partnerLogged = JSON.parse(partnerString)
      setPartnerInfo(partnerLogged)
      setIsLogin(true)
    } else {
      localStorage.removeItem('partner')
      setIsLogin(false)
    }
  }, [])

  const logOut = () => {
    localStorage.removeItem('partner')
    setIsLogin(false)
    navigate('/spectre/admin/partner/login')
  }

  return <PartnerContext.Provider value={{ partnerInfo, loginPartner, isLogin, setIsLogin, logOut }} >
    {children}
  </PartnerContext.Provider>
}

export default PartnerContext