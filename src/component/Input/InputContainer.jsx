import React from 'react';
import Input from './Input'
import { connect } from 'react-redux';
import { add_new_item } from '../../actions/index';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.addNewItem = this.addNewItem.bind(this);
  }
  render() {
    return(
      <div>
        <Input addNewItems={this.addNewItem}/>
      </div>
    )
  }

  addNewItem (event) {
    if (event.keyCode === 13) {
      this.props.addNewItem(event.target.value)
    }
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (value) => dispatch(add_new_item(value))
  }
}

InputContainer = connect(undefined, mapDispatchToProps)(InputContainer)
export default InputContainer