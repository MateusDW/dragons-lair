import { Route } from 'react-router-dom'

export function PublicRoute({ children, path }) {
  return (
    <Route exact path={path}>
      {children}
    </Route>
  )
}
