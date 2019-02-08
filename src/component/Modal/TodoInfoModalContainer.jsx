import React from 'react'
import TodoInfoModal from './TodoInfoModal'

const TodoInfoModalContainer = props => {
  return <TodoInfoModal item={props.location.state.item} />
}

export default TodoInfoModalContainer
