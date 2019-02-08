import * as types from '../constants/ActionTypes'

export const add_new_item = (item, id) => {
  return {
    type: types.ADD_NEW_ITEM,
    payload: {item, id},
  }
}

export const remove_item = id => {
  return {
    type: types.REMOVE_ITEM,
    id: id,
  }
}

export const edit_item = item => {
  return {
    type: types.EDIT_ITEM,
    payload: {item},
  }
}

export const fetch_todo_list = todo_list => {
  return {
    type: types.FETCH_TODO_LIST,
    payload: {todo_list},
  }
}
