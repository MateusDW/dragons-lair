import { Formik, Form, Field } from 'formik'

import { Button, FormWithTitle, Input } from '../../components'

import { DRAGONS_ROUTE } from '../../constants'

import { useDragonsAPI } from '../../hooks'

import './dragons-nest.css'

export function DragonsNest() {
  const { createDragon } = useDragonsAPI()

  async function onSubmit({ name, type }, resetForm) {
    const result = await createDragon({ name, type })

    if (result) {
      resetForm()
    }
  }

  return (
    <div className="container dragons-nest">
      <Formik
        initialValues={{
          name: '',
          type: '',
        }}
        onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
      >
        <FormWithTitle title="Novo dragão">
          <Form className="dragons-nest__form">
            <Field name="name">
              {({ field }) => <Input placeholder="Nome" {...field} />}
            </Field>
            <Field name="type">
              {({ field }) => <Input placeholder="Tipo" {...field} />}
            </Field>
            <div className="dragons-nest__submit">
              <Button type="submit">Cadastrar</Button>
            </div>
            <div className="dragons-nest__go-back">
              <Button to={DRAGONS_ROUTE()}>Voltar</Button>
            </div>
          </Form>
        </FormWithTitle>
      </Formik>
    </div>
  )
}
