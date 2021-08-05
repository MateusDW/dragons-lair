import { Redirect, Route } from 'react-router-dom'

import { Header } from '../components'

import { LOGIN_ROUTE } from '../constants'

export function PrivateRoute({ children, path }) {
  const isLogged = sessionStorage.getItem('IS_LOGGED')

  if (!isLogged) {
    return <Redirect to={{ pathname: LOGIN_ROUTE() }} />
  }

  return (
    <Route exact path={path}>
      <Header></Header>
      {children}
    </Route>
  )
}
