import './form-with-title.css'

export function FormWithTitle({ title, children }) {
  return (
    <div className="form-with-title">
      <div className="form-with-title__title">{title}</div>
      <div className="form-with-title__content">{children}</div>
    </div>
  )
}
