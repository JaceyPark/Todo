import React from 'react';
import Input from './Input'
import { connect } from 'react-redux';
import { add_new_item } from '../../actions/index';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      idx: 0
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
      this.setState({
        idx: this.state.idx + 1
      })
      this.props.addNewItem(event.target.value, this.state.idx)
    }
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (value, idx) => dispatch(add_new_item(value, idx))
  }
}

InputContainer = connect(undefined, mapDispatchToProps)(InputContainer)
export default InputContainer