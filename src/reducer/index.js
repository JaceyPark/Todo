import { ADD_NEW_ITEM } from '../constants/ActionTypes'

const initialState = {
  todo_list: [],
}

const add_new_item = (state, item) => {
/**
 * TODO: IDX도 같이 저장해야함.
 */
  let todo_list = [...state.todo_list]
  todo_list.push(item)

  return todo_list
}

const todo = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_ITEM:
    return {
      todo_list : add_new_item(state, action.item)
    }
    default:
      return state;
  }
}

export default todo