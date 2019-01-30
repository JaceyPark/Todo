import { ADD_NEW_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../constants/ActionTypes'

const initialState = {
  todo_list: {},
}

const add_new_item = (state, action) => {
  const { payload } = action;
  return {
      ...state.todo_list,
      [payload.idx] : payload,
  }
}
const remove_item = (state, idx) => {
  delete state.todo_list[idx]
  return {
    ...state.todo_list,
  };
}

const edit_item = (state, action) => {
  const { payload } = action;
  return {
    ...state.todo_list,
    [payload.item.idx]: payload.item,
  }
}


const todo = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_ITEM:
      return {
        ...state,
        todo_list : add_new_item(state, action)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        todo_list: remove_item(state, action.idx)
      };
    case EDIT_ITEM:
      return {
        ...state,
        todo_list: edit_item(state, action)
      }
    default:
      return state;
  }
}

export default todo