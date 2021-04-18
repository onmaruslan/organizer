import {changeUser, setError, setSuccess} from '../actions/authActions'
import {AuthActionTypes} from '../types/authTypes'

describe('Test sync authActions', () => {

  test('actionCreator changeUser', () => {
    const change = changeUser(false)
    expect(change).toEqual({ type: AuthActionTypes.CHANGE_USER, payload: false })
  })

  test('actionCreator setError', () => {
    const set = setError('error')
    expect(set).toEqual({ type: AuthActionTypes.ERROR, payload: 'error' })
  })

  test('actionCreator setSuccess', () => {
    const set = setSuccess('success')
    expect(set).toEqual({ type: AuthActionTypes.SUCCESS, payload: 'success' })
  })

})