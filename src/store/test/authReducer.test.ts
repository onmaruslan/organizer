import { authReducer } from "../reducers/authReducer"
import {AuthActionTypes, AuthState} from '../types/authTypes'

interface ICustomUser {
  email: string,
  id: number
}

describe('Test authReducer', () => {

  let state: AuthState
  let customUser : ICustomUser

  beforeEach(() => {
    state = {
      user: false,
      error: null,
      success: null,
    }
    customUser = {
      email: 'test@gmail.com',
      id: 1
    }
  })

  test('authReducer for CHANGE_USER', () => {
    state = authReducer(state, {type: AuthActionTypes.CHANGE_USER, payload: customUser})
    expect(state).toEqual({...state, user: customUser})
  })

  test('authReducer for ERROR', () => {
    state = authReducer(state, {type: AuthActionTypes.ERROR, payload: 'error'})
    expect(state).toEqual({...state, error: 'error'})
  })

  test('authReducer for SUCCESS', () => {
    state = authReducer(state, {type: AuthActionTypes.SUCCESS, payload: 'success'})
    expect(state).toEqual({...state, success: 'success'})
  })
})