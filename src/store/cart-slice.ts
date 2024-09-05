import { createSlice } from '@reduxjs/toolkit'
import type {PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  // UUIDv4
  id: string
  name: string
  price: number
  quantity: number
}

export interface CartState {
  value: Array<CartItem>
}

const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, payload: PayloadAction<CartItem>) => {
      state.value.push(payload.payload)
    },
    removeFromCart: (state, payload: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== payload.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
