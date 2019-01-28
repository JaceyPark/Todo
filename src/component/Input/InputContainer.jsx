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
  }
  render() {
    return(
      <div>
        <Input addNewItems={this.addNewItem}/>
      </div>
    )
  }

  addNewItem = (event) => {
    if (event.keyCode === 13) {
      this.setState({
        idx: this.state.idx + 1
      })
      class Item {
        constructor(idx, item) {
          this.item = item;
          this.idx = idx;
        }
      }
      this.props.addNewItem(new Item(this.state.idx, event.target.value) )
    }
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: ({ idx, item }) => dispatch(add_new_item(item, idx))
  }
}

InputContainer = connect(undefined, mapDispatchToProps)(InputContainer)
export default InputContainer