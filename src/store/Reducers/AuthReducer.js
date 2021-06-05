import * as actionTypes from "../Actions/Actions";

const initialState = {
  email: null,
  userID: null,
  token: null,
  error: null,
  signupSuccess: false,
  message: null,
  showLoginModal: false,
};

const cancelModal = (state, action) => {
  return {
    ...state,
    showLoginModal: false,
    message: null,
  };
};
const loginClicked = (state, action) => {
  return {
    ...state,
    showLoginModal: true,
  };
};

const signupSuccess = (state, action) => {
  return {
    ...state,
    signupSuccess: true,
    error: null,
    message: "Account Created Successfully",
  };
};
const signupFail = (state, action) => {
  let message;
  const messageFilter = (message) => {
    return message.split("_").join(" ");
  };
  if (action.error) {
    const fetchedMsg = action.error.data.error.message;
    message = messageFilter(fetchedMsg);
  }
  return {
    ...state,
    signupSuccess: false,
    error: action.error,
    message: message,
  };
};
const loginSuccess = (state, action) => {
  return {
    ...state,
    email: action.response.data.email,
    userID: action.response.data.localId,
    token: action.response.data.idToken,
    error: null,
    message: "Welcome to Primekart",
    showLoginModal: false,
  };
};
const loginFail = (state, action) => {
  let message;
  const messageFilter = (message) => {
    return message.split("_").join(" ");
  };
  if (action.error) {
    const fetchedMsg = action.error.data.error.message;
    message = messageFilter(fetchedMsg);
  }
  return {
    ...state,
    email: null,
    userID: null,
    token: null,
    error: action.error,
    message: message,
  };
};
const resetAuthState = (state) => {
  return {
    ...state,
    message: null,
  };
};
const logoutClicked = (state) => {
  return {
    ...state,
    email: null,
    userID: null,
    token: null,
  };
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_CLICKED:
      return loginClicked(state, action);
    case actionTypes.CANCEL_MODAL:
      return cancelModal(state, action);
    case actionTypes.SIGNUP_SUCCESS:
      return signupSuccess(state, action);
    case actionTypes.SIGNUP_FAIL:
      return signupFail(state, action);
    case actionTypes.RESET_AUTH_STATE:
      return resetAuthState(state);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL:
      return loginFail(state, action);
    case actionTypes.LOGOUT_CLICKED:
      return logoutClicked(state);
    default:
      return state;
  }
};
