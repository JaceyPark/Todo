import * as React from 'react'
import {connect} from 'react-redux'
import Input from './Input'
import {add_new_item} from '../../actions/index'
import {BASE_URL} from '../../constants/API'

class Item {
  constructor(item) {
    this.item = item
    this.id = +new Date()
  }
}

class InputContainer extends React.Component {
  state = {
    text: '',
  }

  render() {
    return (
      <div>
        <Input
          addNewItems={this.addNewItemHandler}
          text={this.state.text}
          onItemInputChangeHandler={this.onItemInputChangeHandler}
        />
      </div>
    )
  }

  onItemInputChangeHandler = e => {
    e.persist()

    this.setState(prevState => ({
      ...prevState,
      text: e.target.value,
    }))
  }

  /**
   * 1. call stack
   * 2. promise
   * 3. event queue
   */
  addNewItemHandler = async e => {
    e.preventDefault()
    this.setState({text: ''})
    if (this.state.text.length === 0) {
      return false
    }
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(new Item(this.state.text)),
      headers: {'Content-Type': 'application/json'},
    })
    const result = await response.json()
    this.props.addNewItem(result)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewItem: ({id, item}) => dispatch(add_new_item(item, id)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(InputContainer)
