import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isAuthenticated: false, // Pour savoir si l'utilisateur est connecté
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state) => {
      state.isAuthenticated = true; // On simule une connexion réussie
    },
  },
});

export const { setEmail, setPassword, login } = authSlice.actions;
export default authSlice.reducer;
