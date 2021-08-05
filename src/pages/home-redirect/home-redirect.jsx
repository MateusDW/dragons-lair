import { Redirect } from 'react-router-dom'

import { LOGIN_ROUTE } from '../../constants'

export function HomeRedirect() {
  return <Redirect to={{ pathname: LOGIN_ROUTE() }} />
}
