import React from 'react'
import {connect} from 'react-redux'
import ItemList from './ItemList'
import {BASE_URL} from '../../constants/API'
import {remove_item, edit_item, fetch_todo_list} from '../../actions/index'
class TodoContainer extends React.Component {
  componentDidMount() {
    this.fetchTodoList()
  }

  render() {
    return (
      <div>
        <ItemList removeItem={this.removeItem} editItem={this.editItem} />
      </div>
    )
  }

  fetchTodoList = async () => {
    const fetching = await fetch(BASE_URL, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    const result = await fetching.json()
    this.props.fetchTodoList(result)
  }

  removeItem = async id => {
    /**
     * TODO: delete가 success 되었다는걸 어떻게 알 수 있을까 ?
     */
    await fetch(BASE_URL + id, {
      method: 'DELETE',
    })
    this.props.removeItem(id)
  }

  editItem = async item => {
    const response = await fetch(BASE_URL + item.id, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {'Content-Type': 'application/json '},
    })
    const result = await response.json()
    this.props.editItem(result)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoList: list => {
      dispatch(fetch_todo_list(list))
    },
    removeItem: targetId => {
      dispatch(remove_item(targetId))
    },
    editItem: item => dispatch(edit_item(item)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(TodoContainer)
