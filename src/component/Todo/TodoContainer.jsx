import React from 'react';
import ItemList from './ItemList';
import { connect } from 'react-redux'
import { remove_item } from '../../actions/index'
class TodoContainer extends React.Component {
  render() {
    return(
      <div>
        <ItemList removeItem={(targetIdx) => {this.props.removeItem(targetIdx)}} editItem={(item) => this.editItem(item)}/>
      </div>
    )
  }
  editItem = (item) => {
    this.props.editItem(item)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (targetIdx) => {
      debugger
      dispatch(remove_item(targetIdx))
    },
    editItem: (item) => dispatch() 
  }
}

export default connect(undefined, mapDispatchToProps)(TodoContainer)