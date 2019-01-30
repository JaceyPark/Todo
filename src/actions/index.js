import * as types from '../constants/ActionTypes'

export const add_new_item = (item, idx) => {
  return {
    type: types.ADD_NEW_ITEM,
    payload: { item, idx }
  }
}

export const remove_item = (idx) => {
  return {
    type: types.REMOVE_ITEM,
    idx: idx
  }
}

export const edit_item = (item) => {
  return {
    type: types.EDIT_ITEM,
    payload: { item }
  }
}