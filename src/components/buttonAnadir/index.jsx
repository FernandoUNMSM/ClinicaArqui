import React from 'react'

export default function ButtonAnadir ({type, setAnadir, children}){
  const changeAnadir = () => {
    setAnadir(true)
  }
  return (<>
    <button onClick={changeAnadir} className='button'>{children}</button>
  </>)
}