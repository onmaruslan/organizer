import {AuthAction, AuthActionTypes, AuthState } from "../types/authTypes"

const initialState : AuthState = {
  user: JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || 'false'),
  error: null,
  success: null,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.CHANGE_USER:
      return {...state, user: action.payload}
    case AuthActionTypes.ERROR:
      return {...state, error: action.payload}
    case AuthActionTypes.SUCCESS:
      return {...state, success: action.payload}
    default:
      return state
  }
}