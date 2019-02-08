import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addNewItems}>
        <input
          type="text"
          onChange={this.props.onItemInputChangeHandler}
          value={this.props.text}
        />
      </form>
    )
  }
}

export default Input
