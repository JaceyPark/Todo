import * as React from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash'
import Input from './Input'
import { add_new_item } from '../../actions/index';

class Item {
  constructor(item) {
    this.item = item;
    this.idx = uniqueId('todo_item_');
  }
}

class InputContainer extends React.Component {
  state = {
      text: '',
    }

  render() {
    return(
      <div>
        <Input 
          addNewItems={this.addNewItem} 
          text={this.state.text}
          onItemInputChangeHandler={this.onItemInputChangeHandler}
        />
      </div>
    )
  }

  onItemInputChangeHandler = (e) => {
    e.persist();
    
    this.setState(prevState => ({
      ...prevState,
      text: e.target.value
    }))
  }

  addNewItem = (e) => {    
    e.preventDefault();
    if (this.state.text.length === 0) {
      return false;
    }

    this.props.addNewItem(new Item(this.state.text))
    this.setState({
      text : ''
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: ({ idx, item }) => dispatch(add_new_item(item, idx))
  }
}

export default connect(null, mapDispatchToProps)(InputContainer)