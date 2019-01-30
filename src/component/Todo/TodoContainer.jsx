import React from 'react';
import { connect } from 'react-redux'
import ItemList from './ItemList';
import { remove_item, edit_item } from '../../actions/index'
class TodoContainer extends React.Component {
  render() {
    return(
      <div>
        <ItemList 
          removeItem={this.props.removeItem} 
          editItem={this.props.editItem}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (targetIdx) => {
      dispatch(remove_item(targetIdx))
    },
    editItem: (item) => dispatch(edit_item(item)) 
  }
}

export default connect(null, mapDispatchToProps)(TodoContainer)