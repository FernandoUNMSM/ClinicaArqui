import { useContext } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import UserContext from 'context/userContext'
import { UserContextProvider } from 'context/userContext'

import Login from 'pages/login'
import Workspace from 'pages/workspace'
import Register from 'pages/register'
import DoctoresList from 'pages/workspace/administratorViews/doctoresList'
import PacientesList from 'pages/workspace/administratorViews/pacientesList'

const ProtectedRoute = ({ children }: any) => {
  const { isLogin } = useContext(UserContext)
  const location = useLocation()

  if (location.pathname === '/register') {
    return children
  }
  if (location.pathname === '/login') {
    return (isLogin) ? <Navigate to='/clinica' /> : children
  }

  return (isLogin) ? children : <Navigate to='/login' />
}

export default function RouterClinica({ }) {
  return (<>
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        } />
        <Route path='/register' element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        } />
        <Route path='/clinica' element={
          <ProtectedRoute>
            <Workspace />
          </ProtectedRoute>
        }>
          <Route path='administrador/doctores' element={<DoctoresList />} />
          <Route path='administrador/pacientes' element={<PacientesList />} />
        </Route>
      </Routes>
    </UserContextProvider>
  </>)
}