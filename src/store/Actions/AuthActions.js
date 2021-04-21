import axios from "axios";
export const LOGIN_CLICKED = "LOGIN_CLICKED";
export const LOGOUT_CLICKED = "LOGOUT_CLICKED";
export const CANCEL_MODAL = "CANCEL_MODAL";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const RESET_AUTH_STATE = "RESET_AUTH_STATE";

export const cancelModalHandler = () => {
  return {
    type: CANCEL_MODAL,
  };
};
export const loginClicked = () => {
  return {
    type: LOGIN_CLICKED,
  };
};
export const logoutClicked = () => {
  return {
    type: LOGOUT_CLICKED,
  };
};
const signupSuccess = (res) => {
  return {
    type: SIGNUP_SUCCESS,
    response: res,
  };
};

const signupFail = (err) => {
  return {
    type: SIGNUP_FAIL,
    error: err.response,
  };
};
const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    response: response,
  };
};
const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    error: error.response,
  };
};

export const signupHanlder = (email, password) => {
  return (dispatch) => {
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPV6R-sNmVqArSK3oMgzFbHcKs29ZZsEI",
        payload
      )
      .then((res) => {
        dispatch(signupSuccess(res));
      })
      .catch((err) => dispatch(signupFail(err)));
  };
};
export const loginHandler = (email, password) => {
  return (dispatch) => {
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPV6R-sNmVqArSK3oMgzFbHcKs29ZZsEI",
        payload
      )
      .then((res) => {
        dispatch(loginSuccess(res));
      })
      .catch((err) => dispatch(loginFail(err)));
  };
};

export const resetAuthState = () => {
  return {
    type: RESET_AUTH_STATE,
  };
};
