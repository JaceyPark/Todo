import React from 'react'
import InputContainer from '../component/Input/InputContainer'
import TodoContainer from '../component/Todo/TodoContainer'
import TodoInfoModalContainer from '../component/Modal/TodoInfoModalContainer'
import {Route} from 'react-router-dom'
class Todo extends React.Component {
  render() {
    return (
      <div>
        <InputContainer />
        <TodoContainer />
        <Route path="/info/:id" component={TodoInfoModalContainer} />
      </div>
    )
  }
}

export default Todo
