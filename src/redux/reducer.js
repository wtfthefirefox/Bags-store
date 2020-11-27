const initialState = {
  activeSection: "Bag",
  error: false,
  loading: true,
  items: [],
  total: 0,
  cartItems: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case "LOAD_ITEMS":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case "ERROR":
      return {
        ...state,
        error: true
      }
    case "INCREMENT_COUNT_OF_ITEM":
      const incrementedId = action.payload;
      const isSaleIncrementedItem = state.items[incrementedId].isSale ? 0.85 : 1;
      const itemsBeforeIncrementedItem = state.items.slice(0, incrementedId);
      const itemsAfterIncrementedItem = state.items.slice(incrementedId + 1, state.items.length);
      const middleIncrementedItem = {
        ...state.items[incrementedId],
        count: state.items[incrementedId].count + 1,
        total: Math.floor(state.items[incrementedId].price * isSaleIncrementedItem) * (state.items[incrementedId].count + 1)
      }
      
      return {
        ...state,
        items: [
          ...itemsBeforeIncrementedItem,
          middleIncrementedItem,
          ...itemsAfterIncrementedItem
        ]
      }
    case "DECREMENT_COUNT_OF_ITEM":
      const decrementedId = action.payload;

      if (state.items[decrementedId].count === 1) {
        return state
      }

      const isSaleDecrementedItem = state.items[decrementedId].isSale ? 0.85 : 1;
      const itemsBeforeDecrementedItem = state.items.slice(0, decrementedId);
      const itemsAfterDecrementedItem = state.items.slice(decrementedId + 1, state.items.length);
      const middleDecrementedItem = {
        ...state.items[decrementedId],
        count: state.items[decrementedId].count - 1,
        total: Math.floor(state.items[decrementedId].price * (state.items[decrementedId].count - 1) * isSaleDecrementedItem)
      }
      
      return {
        ...state,
        items: [
          ...itemsBeforeDecrementedItem,
          middleDecrementedItem,
          ...itemsAfterDecrementedItem
        ]
      }
    case "ITEM_ADD_TO_CART":
      const addingItemId = action.payload.idInItems;
      const addingItemInItems = {
        ...state.items[addingItemId],
        urlImg: state.items[addingItemId].urlImg,
        total: state.items[addingItemId].isSale ? Math.floor(state.items[addingItemId].price * 0.85): state.items[addingItemId].price,
        count: 1
      };
      const cartItemsBeforeAddingItemInItems = state.items.slice(0, addingItemId);
      const cartItemsAfterAddingItemInItems = state.items.slice(addingItemId + 1, state.items.length);
      const isInCartItems = state.cartItems.findIndex(item => item.id === action.payload.idItem);

      if (isInCartItems === -1) {
        const addingItem = {
          id: action.payload.idItem,
          name: state.items[addingItemId].name,
          count: state.items[addingItemId].count,
          total: state.items[addingItemId].total,
          colorsImgs: state.items[addingItemId].colorsImgs,
          activeImgId: state.items[addingItemId].activeImgId,
          colorsImgs: state.items[addingItemId].colorsImgs
        };

        return {
          ...state,
          items: [
            ...cartItemsBeforeAddingItemInItems,
            addingItemInItems,
            ...cartItemsAfterAddingItemInItems
          ],
          cartItems: [
            ...state.cartItems,
            addingItem
          ],
          total: state.total + addingItem.total
        }
      } else {
          const editedItem = {
            ...state.cartItems[isInCartItems],
            total: state.cartItems[isInCartItems].total + state.items[addingItemId].total,
            count: state.cartItems[isInCartItems].count + state.items[addingItemId].count
          };
          const cartItemsBeforeAddingItem = state.cartItems.slice(0, isInCartItems);
          const cartItemsAfterAddingItem = state.cartItems.slice(isInCartItems + 1, state.cartItems.length);

          return {
            ...state,
            items: [
              ...cartItemsBeforeAddingItemInItems,
              addingItemInItems,
              ...cartItemsAfterAddingItemInItems
            ],
            cartItems: [
              ...cartItemsBeforeAddingItem,
              editedItem,
              ...cartItemsAfterAddingItem
            ],
            total: state.total + state.items[addingItemId].total
          }
      }
    case "INCREMENT_COUNT_OF_ITEM_IN_CART":
      const incrementedItemIdInCart = state.cartItems.findIndex(item => item.id === action.payload);
      const cartItemsBeforeIncrementedItem = state.cartItems.slice(0, incrementedItemIdInCart);
      const cartItemsAfterIncrementedItem = state.cartItems.slice(incrementedItemIdInCart + 1, state.cartItems.length);
      const incrementedItem = {
        ...state.cartItems[incrementedItemIdInCart],
        count: state.cartItems[incrementedItemIdInCart].count + 1,
        total: state.cartItems[incrementedItemIdInCart].total / state.cartItems[incrementedItemIdInCart].count * (state.cartItems[incrementedItemIdInCart].count + 1)
      };

      return {
        ...state,
        cartItems: [
          ...cartItemsBeforeIncrementedItem,
          incrementedItem,
          ...cartItemsAfterIncrementedItem
        ],
        total: state.total + state.cartItems[incrementedItemIdInCart].total / state.cartItems[incrementedItemIdInCart].count
      }
    case "DECREMENT_COUNT_OF_ITEM_IN_CART":
      const decrementedItemIdInCart = state.cartItems.findIndex(item => item.id === action.payload);
      const cartItemsBeforeDecrementedItem = state.cartItems.slice(0, decrementedItemIdInCart);
      const cartItemsAfterDecrementedItem = state.cartItems.slice(decrementedItemIdInCart + 1, state.cartItems.length);

      if (state.cartItems[decrementedItemIdInCart].count - 1 === 0) {
        return {
          ...state,
          cartItems: [
            ...cartItemsBeforeDecrementedItem,
            ...cartItemsAfterDecrementedItem
          ],
          total: state.total - state.cartItems[decrementedItemIdInCart].total
        }
      }

      const decrementedItem = {
        ...state.cartItems[decrementedItemIdInCart],
        count: state.cartItems[decrementedItemIdInCart].count - 1,
        total: state.cartItems[decrementedItemIdInCart].total / state.cartItems[decrementedItemIdInCart].count * (state.cartItems[decrementedItemIdInCart].count - 1)
      };

      return {
        ...state,
        cartItems: [
            ...cartItemsBeforeDecrementedItem,
            decrementedItem,
            ...cartItemsAfterDecrementedItem
        ],
        total: state.total - state.cartItems[decrementedItemIdInCart].total / state.cartItems[decrementedItemIdInCart].count
      }
    case "CHANGE_ACTIVE_COLOR":
        const coloredItemId = state.items.findIndex(item => item.id === action.payload.itemId);
      const unChangedColoredItem = state.items[coloredItemId];
      const coloredItem = {
          ...unChangedColoredItem,
          activeImgId: action.payload.id
      };

      return {
        ...state,
        items: [
          ...state.items.slice(0, coloredItemId),
          coloredItem,
          ...state.items.slice(coloredItemId + 1, state.items.length)
        ]
      }
    case "CHANGE_ACTIVE_SIZE_OF_ITEM":
      const ChangingActiveSizeItemId = state.items.findIndex(item => item.id === action.payload.itemId);
      const ChangingActiveSizeItem = {
        ...state.items[ChangingActiveSizeItemId],
        activeSizeId: action.payload.sizeId
      };
      
      return {
        ...state,
        items: [
          ...state.items.slice(0, ChangingActiveSizeItemId),
          ChangingActiveSizeItem,
          ...state.items.slice(ChangingActiveSizeItem + 1, state.items.length)
        ]
      }
    default: 
      return state
  }
}

export default reducer;