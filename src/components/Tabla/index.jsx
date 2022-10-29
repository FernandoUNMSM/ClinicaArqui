import React, {useState, useEffect} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { TableContainer } from './styles'
import setFont2 from '../../services/setFont';

export default function Tabla({children}) {
  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  useEffect(()=> {
    if(font !== null) {
      setFont2(font, size)
    }
  },[])


  return (<>
    <TableContainer>
      {/* <PerfectScrollbar> */}
        <div className="table">
          {children}
        </div>
      {/* </PerfectScrollbar> */}
    </TableContainer>
  </>)
}
