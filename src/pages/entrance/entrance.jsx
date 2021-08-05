import { useState } from 'react'

import { Redirect } from 'react-router-dom'

import { Formik, Form, Field } from 'formik'

import { Input, Button, FormWithTitle } from '../../components'

import { DRAGONS_ROUTE } from '../../constants'

import { requiredInput, multipleValidations } from '../../helpers'

import './entrance.css'

export function Entrance() {
  const [loggedIn, setLoggedIn] = useState(false)

  function usernameValidation(value) {
    if (value !== 'dragon_master') {
      return 'Usuário inválido.'
    }
  }

  function passwordValidation(value) {
    if (value !== 'Test123*') {
      return 'Senha inválida.'
    }
  }

  function onLogin() {
    sessionStorage.setItem('IS_LOGGED', true)
    setLoggedIn(true)
  }

  return loggedIn ? (
    <Redirect to={{ pathname: DRAGONS_ROUTE() }} />
  ) : (
    <div className="container entrance">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={onLogin}
      >
        <FormWithTitle title="Entrada">
          <Form className="entrance__form">
            <Field
              name="username"
              validate={multipleValidations(requiredInput, usernameValidation)}
            >
              {({ field }) => <Input placeholder="Usuário" {...field} />}
            </Field>
            <Field
              name="password"
              validate={multipleValidations(requiredInput, passwordValidation)}
            >
              {({ field }) => (
                <Input placeholder="Senha" type="password" {...field} />
              )}
            </Field>
            <div className="entrance__submit">
              <Button type="submit">Entrar</Button>
            </div>
          </Form>
        </FormWithTitle>
      </Formik>
    </div>
  )
}
