import { Link } from 'react-router-dom'

import './button.css'

export function Button({ onClick, children, to, ...props }) {
  return to ? (
    <Link className="button" to={to}>
      {children}
    </Link>
  ) : (
    <button className="button" onClick={onClick} {...props}>
      {children}
    </button>
  )
}
