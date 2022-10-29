import {useState} from 'react'
import getInfoDNI from 'services/getInfoDNI';

export default function useGetInfoDNI (){
  const [datesDNI, setDatesDNI] = useState({
    noNombres: '',
    apePaterno: '',
    apeMaterno: ''
  })

  const getInfo = (evt) => {
    const dni = evt.target.value
    if (dni.length === 8) {
      // clearErrors('dni')
      getInfoDNI(dni)
        .then(res => {
          (res !== null) ? setDatesDNI(res) : console.log('avion dijo el camion')
        })
    } else {
      setDatesDNI({
        noNombres: '',
        apePaterno: '',
        apeMaterno: ''
      })
    }
  }
  return {getInfo, datesDNI}
}