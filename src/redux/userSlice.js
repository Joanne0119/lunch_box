import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLogin: false,
    orderlist: []
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLogin = true;
    },
    updateUser(state, action) {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,  
        };
      }
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
      state.orderlist = []
    },
  }
})

export const { setUser, logout, addOrderToUser, updateUser } = userSlice.actions
export default userSlice.reducer
