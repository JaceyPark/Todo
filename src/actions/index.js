import * as types from '../constants/ActionTypes'

export const add_new_item = (item, idx) => {
  return {
    type: types.ADD_NEW_ITEM,
    item: item,
    idx: idx
  }
}

export const remove_item = (item, idx) => {
  return {
    type: types.REMOVE_ITEM,
    idx: idx
  }
}