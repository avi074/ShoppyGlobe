import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalQuantity: 0,
  },
  reducers: {
    updateItemQuantityByStep: (state, { payload: { productId, step } }) => {
      if (state.items[productId]) {
        state.items[productId].quantity += step
        state.totalQuantity += step
        if (state.items[productId].quantity <= 0) {
          cartSlice.caseReducers.removeItemFromCart(state, {payload:productId})
        }
      } else {
        throw new Error(`Cart Item (${productId})  not found!`)
      }
    },

    addItemToCart: {
      reducer: (state, action) => {
        const product = action.payload
        const { id } = product

        if (state.items[id]) {
          cartSlice.caseReducers.updateItemQuantityByStep(state, {
            payload: { productId: id, step: 1 },
          })
        } else {
          state.items[id] = {
            ...product,
            quantity: 1,
          }
          state.totalQuantity += 1
        }
      },
      prepare: (product) => {
        const { id, title, brand, price, discountPercentage, sku, thumbnail } =
          product
        return {
          payload: {
            id,
            title,
            brand,
            price,
            discountPercentage,
            sku,
            thumbnail,
          },
        }
      },
    },

    removeItemFromCart: (state, action) => {
      state.totalQuantity -= state.items[action.payload].quantity
      delete state.items[action.payload]
    },

    clearCart: (state) => {
      state.items = {}
      state.totalQuantity = 0
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantityByStep,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
