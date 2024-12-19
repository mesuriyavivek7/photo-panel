import axios from 'axios';
// src/redux/actions/authActions.js
import { LOGIN_FETCH_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types';


//For validating uesr
export const validateUser = async (dispatch)=>{
    dispatch({type:LOGIN_FETCH_START})
    try{
       const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/validate`,{withCredentials:true})
       const data = response.data

       dispatch({
        type:LOGIN_SUCCESS,
        payload:data
       })

    }catch(err){
       dispatch({
        type:LOGIN_FAILURE,
        payload:err.response.data
       })
    }
}

// Login Action
export const loginStart = () => ({
   type: LOGIN_FETCH_START,
})

// Login Success Action
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

// Login Failure Action
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Logout Action
export const logout = () => ({
  type: LOGOUT,
});

