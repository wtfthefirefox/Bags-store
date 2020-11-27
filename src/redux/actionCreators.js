const onLoadItems = (items) => {
  return {
    type: "LOAD_ITEMS",
    payload: items
  }
}

const turnLoad = () => {
  return {
    type: "LOADING"
  } 
}

const onError = () => {
  return {
    type: "ERROR"
  }
}

const incrementCountOfItem = (id) => {
  return {
    type: "INCREMENT_COUNT_OF_ITEM",
    payload: id
  }
}

const decrementCountOfItem = (id) => {
  return {
    type: "DECREMENT_COUNT_OF_ITEM",
    payload: id
  }
}

const onAddToCart = (idInItems, idItem) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: {
      idInItems, 
      idItem
    }
  }
}

const incrementCountOfItemInCart = (id) => {
  return {
    type: "INCREMENT_COUNT_OF_ITEM_IN_CART",
    payload: id
  }
}

const decrementCountOfItemInCart = (id) => {
  return {
    type: "DECREMENT_COUNT_OF_ITEM_IN_CART",
    payload: id
  }
}

const changeActiveColor = (itemId, id) => {
  return {
    type: "CHANGE_ACTIVE_COLOR",
    payload: {
      itemId,
      id
    }
  }
}

const changeActiveSizeOfItem = (itemId, sizeId) => {
  return {
    type: "CHANGE_ACTIVE_SIZE_OF_ITEM",
    payload: {
      itemId,
      sizeId
    }
  }
} 

export {
  onLoadItems,
  onError,
  turnLoad,
  incrementCountOfItem,
  decrementCountOfItem,
  onAddToCart,
  incrementCountOfItemInCart,
  decrementCountOfItemInCart,
  changeActiveColor,
  changeActiveSizeOfItem
}