import { Field, Form, Formik } from 'formik'

import { Input, Button } from '../../../components'

import { requiredInput } from '../../../helpers'

import { useDragonsAPI, useSliderModal } from '../../../hooks'

import './edit-dragon-form.css'

export function EditDragonForm({ dragon, updateList }) {
  const { editDragon } = useDragonsAPI()
  const { hideSliderModal } = useSliderModal()

  async function onEdit({ name, type }) {
    const result = await editDragon(dragon.id, { name, type })

    if (result) {
      await updateList()
      hideSliderModal()
    }
  }

  return (
    <Formik
      initialValues={{
        name: dragon.name,
        type: dragon.type,
      }}
      onSubmit={onEdit}
    >
      <Form className="edit-dragon-form">
        <h2>Editar dragão</h2>
        <Field name="name" validate={requiredInput}>
          {({ field }) => <Input placeholder="Nome" {...field} />}
        </Field>
        <Field name="type" validate={requiredInput}>
          {({ field }) => <Input placeholder="Tipo" {...field} />}
        </Field>
        <Button type="submit">Editar</Button>
      </Form>
    </Formik>
  )
}
