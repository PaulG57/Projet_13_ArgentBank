import { createSlice } from "@reduxjs/toolkit";

// Récupération du token depuis le storage
const tokenFromLocal = localStorage.getItem("token");
const tokenFromSession = sessionStorage.getItem("token");
const token = tokenFromLocal || tokenFromSession;
const rememberMe = !!tokenFromLocal;

const initialState = {
  isAuthenticated: token ? true : false,
  token: token,
  user: null,
  rememberMe: rememberMe,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.rememberMe = action.payload.rememberMe;
      // Stocker le token dans le bon storage en fonction de rememberMe
      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
        sessionStorage.removeItem("token");
      } else {
        sessionStorage.setItem("token", action.payload.token);
        localStorage.removeItem("token");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.rememberMe = false;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;