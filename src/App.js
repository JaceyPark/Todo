import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Todo from './scene/Todo'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    )
  }
}

export default App
