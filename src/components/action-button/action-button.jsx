import { Link } from 'react-router-dom'

import './action-button.css'

export function ActionButton({ onClick, to, icon }) {
  return onClick ? (
    <button className="action-button" onClick={onClick}>
      {icon}
    </button>
  ) : (
    <Link className="action-button" to={to}>
      {icon}
    </Link>
  )
}
