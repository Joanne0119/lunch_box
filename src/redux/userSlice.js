import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLogin: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLogin = true;
    },
    addOrderToUser: (state, action) => {
        if (!state.orderlist) {
            state.orderlist = []
        }
            state.orderlist.push(action.payload)
        
    },
    logout(state) {
      state.user = null;
      state.isLogin = false;
    },
  }
})

export const { setUser, logout, addOrderToUser } = userSlice.actions
export default userSlice.reducer
