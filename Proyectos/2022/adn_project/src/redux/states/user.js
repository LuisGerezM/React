import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "utilities/sessionStorage.util";

const { REACT_APP...: USER } = process.env;

const initialUserState = {
  loadingUser: false,
  user: {},
  userToken: "",
  error: false,
  status_code: "",
  success_request: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: sessionStorage.getItem(USER)
    ? {
        ...initialUserState,
        user: JSON.parse(sessionStorage.getItem(USER)),
        userToken: JSON.parse(sessionStorage.getItem(USER)).userToken,
      }
    : initialUserState,
  reducers: {
    userRequest: (state, action) => {
      return { ...state, loadingUser: true };
    },
    userSuccess: (state, action) => {
      const dataToPersist = {
        email: action.payload.email,
        role: action.payload.role,
        userName: action.payload.userName,
        userToken: action.payload.token,
      };

      persistLocalStorage(USER, dataToPersist);
      return {
        ...initialUserState,
        user: {
          email: action.payload.email,
          role: action.payload.role,
          userName: action.payload.userName,
        },
        userToken: action.payload.token,
        status_code: action.payload.status,
        success_request: true,
      };
    },
    userFailure: (state, action) => {
      return {
        ...initialUserState,
        error: action.payload,
        user: state.user,
        userToken: action.payload.token,
      };
    },
    userResetNotification: (state, action) => {
      return {
        ...initialUserState,
        user: state.user,
        userToken: state.userToken,
      };
    },
    resetUser: () => {
      clearLocalStorage(USER);
      return initialUserState;
    },
  },
});

export const {
  userRequest,
  userSuccess,
  userFailure,
  userResetNotification,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
