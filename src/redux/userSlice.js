import { createSlice } from '@reduxjs/toolkit'
import { p } from 'motion/react-client';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLogin: false,
    orderlist: [],
    profileImage: '/assets/guest.png', // 預設頭像
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
      state.profileImage = '/assets/guest.png'; // 重置頭像
    },
    setAvatar(state, action) {
      state.profileImage = action.payload; // 更新頭像
    }
  }
})

export const { setUser, logout, addOrderToUser, updateUser, setAvatar } = userSlice.actions
export default userSlice.reducer
