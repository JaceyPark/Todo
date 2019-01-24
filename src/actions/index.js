import * as types from '../constants/ActionTypes'

export const add_new_item = (item) => {
  return {
    type: types.ADD_NEW_ITEM,
    item: item,
  }
}
