import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    userID: null,
    email: null,
    loading: false,
    error: false,
    token: null,
    image:null,
    bio:null
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.token = payload?.key;
      state.image = payload?.user?.image;
      state.bio = payload?.user?.bio;
      state.email = payload?.user?.email;
      state.userID = payload?.user?.id;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
      state.image=null
      state.bio=null
      state.email=null
      state.userID=null
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.error = false;
      state.image = payload?.image;
      state.bio = payload?.bio;
      state.email = payload?.email;
      state.userID = payload?.id;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;