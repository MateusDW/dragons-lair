import { ErrorMessage, useFormikContext } from 'formik'
import './input.css'

export function Input({ name, ...props }) {
  const { errors, touched } = useFormikContext()

  const hasErrors = errors[name] && touched[name]

  return (
    <div className="input">
      <input className="input__field" name={name} {...props} />
      {hasErrors ? (
        <div className="input__error">
          <ErrorMessage name={name} />
        </div>
      ) : null}
    </div>
  )
}
