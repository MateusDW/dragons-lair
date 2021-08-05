import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ROUTES, PrivateRoute, PublicRoute } from './index'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map(({ path, Component, isPrivate }, key) => {
          return isPrivate ? (
            <PrivateRoute key={key} path={path}>
              <Component />
            </PrivateRoute>
          ) : (
            <PublicRoute key={key} exact path={path}>
              <Component />
            </PublicRoute>
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}
