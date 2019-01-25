import { ADD_NEW_ITEM, REMOVE_ITEM } from '../constants/ActionTypes'
import { keyBy, assign } from 'lodash'

const initialState = {
  todo_list: {} ,
}

const add_new_item = (state, item, idx) => {
  let todo_list = state.todo_list
  todo_list = assign(todo_list, keyBy([{'item' : item, 'idx' : idx }], 'idx'))
  
  console.log(todo_list)
  return todo_list
}

const remove_item = (state, idx) => {
  let todo_list = [...state.todo_list]
  todo_list.splice(idx, 1);

  return todo_list
}


const todo = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_ITEM:
      return {
        todo_list : add_new_item(state, action.item, action.idx)
      }
    case REMOVE_ITEM:
      return {
        todo_list : remove_item(state, action.idx)
      }
    default:
      return state;
  }
}

export default todo