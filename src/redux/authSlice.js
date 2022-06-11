import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    email: '',
    gender: 0,
    role: 0,
    _id: 0
  },
  isLogin: false,
  jwt: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.info = action.payload;
      state.isLogin = true;
      state.jwt = action.payload.jwt;
    },
    logout: (state) => {
      state.info = {
        email: '',
        gender: 0,
        role: 0,
        _id: 0
      };
      state.isLogin = false;
      state.jwt = '';
    }
  }
});

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions;

export const selectUserInfo = (state) => state.auth.info;
export const selectIsLogin = (state) => state.auth.isLogin;

const authReducer = authSlice.reducer;
export default authReducer;
