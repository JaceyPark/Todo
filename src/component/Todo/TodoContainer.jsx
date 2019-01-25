import React from 'react';
import ItemList from './ItemList';
import { connect } from 'react-redux'
import { remove_item } from '../../actions/index'
class TodoContainer extends React.Component {
  render() {
    return(
      <div>
        <ItemList removeItem={(targetIdx) => {this.props.removeItem(targetIdx)}}/>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (targetIdx) => dispatch(remove_item(targetIdx))
  }
}

export default connect(undefined, mapDispatchToProps)(TodoContainer)