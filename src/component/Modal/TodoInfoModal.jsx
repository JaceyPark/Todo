import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const TodoInfoModal = props => {
  return (
    <div className="info">
      <h1>
        <strong>title : </strong>
        {props.item}
      </h1>
      <Link to="/">close</Link>
    </div>
  )
}

export default TodoInfoModal
