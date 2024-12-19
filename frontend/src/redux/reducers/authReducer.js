// src/redux/reducers/authReducer.js
import { LOGIN_FETCH_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types';

const initialState = {
  user: null,            
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FETCH_START:
       return {
         ...state,
         loading: true
       }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
