export interface AuthState {
  user: object | undefined | boolean
  error: null | string
  success: null | string
}

export enum AuthActionTypes {
  CHANGE_USER = 'CHANGE_USER',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

interface changeUserAction {
  type: AuthActionTypes.CHANGE_USER,
  payload: object | undefined | boolean
}
interface errorAction {
  type: AuthActionTypes.ERROR
  payload: string | null
}
interface successAction {
  type: AuthActionTypes.SUCCESS
  payload: string | null
}

export type AuthAction = changeUserAction | errorAction | successAction