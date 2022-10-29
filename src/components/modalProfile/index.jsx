import React, { useEffect, useState } from 'react'
import { Container, ProfileContainer } from './styles';
import Perfil from 'components/perfil'
import Loader from 'components/loader'
import getInfoPaciente from 'services/getInfoPaciente';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
export default function ModalProfile({ dni, setProfile }) {
  const [user, setUser] = useState([])
  const [familiares, setFamiliares] = useState([])
  const [showProfile, setShowProfile] = useState(false)
  useEffect(() => {
    getInfoPaciente(dni)
      .then(res => {
        setUser(res.usuario)
        setFamiliares(res.familiares)
        setShowProfile(true)
      })
  }, [])

  return (<>
    {
      (showProfile)
        ?
        <Container>
          <ProfileContainer>
            <div className="cerrar" onClick={() => setProfile(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <Perfil user={user} familiares={familiares} />
          </ProfileContainer>
        </Container>
        : <Loader/>
    }
  </>)
}