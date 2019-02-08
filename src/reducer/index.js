import {keyBy} from 'lodash'
import {
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  FETCH_TODO_LIST,
} from '../constants/ActionTypes'

const initialState = {
  todo_list: {},
}

const add_new_item = (state, action) => {
  const {payload} = action
  return {
    ...state.todo_list,
    [payload.id]: payload,
  }
}
const remove_item = (state, id) => {
  delete state.todo_list[id]
  return {
    ...state.todo_list,
  }
}

const edit_item = (state, action) => {
  const {payload} = action
  return {
    ...state.todo_list,
    [payload.item.id]: payload.item,
  }
}

const fetch_todo_list = (state, action) => {
  const {payload} = action

  return {
    ...keyBy(payload.todo_list, 'id'),
  }
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return {
        ...state,
        todo_list: add_new_item(state, action),
      }
    case REMOVE_ITEM:
      return {
        ...state,
        todo_list: remove_item(state, action.id),
      }
    case EDIT_ITEM:
      return {
        ...state,
        todo_list: edit_item(state, action),
      }
    case FETCH_TODO_LIST:
      return {
        ...state,
        todo_list: fetch_todo_list(state, action),
      }
    default:
      return state
  }
}

export default todo
