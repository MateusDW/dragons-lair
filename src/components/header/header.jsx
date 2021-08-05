import { useState } from 'react'

import { Redirect } from 'react-router-dom'

import { ReactComponent as Logout } from '../../assets/icons/logout.svg'

import { LOGIN_ROUTE } from '../../constants'

import './header.css'

export function Header() {
  const [loggedOut, setLoggedOut] = useState(false)

  function onClickLogout() {
    sessionStorage.removeItem('IS_LOGGED')
    setLoggedOut(true)
  }

  return loggedOut ? (
    <Redirect to={LOGIN_ROUTE()} />
  ) : (
    <header className="header">
      <div className="container">
        <div className="header__welcome">Bem-vindo 🐉</div>
        <div className="header__logout" onClick={onClickLogout}>
          <Logout />
        </div>
      </div>
    </header>
  )
}
