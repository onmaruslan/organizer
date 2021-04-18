import { Dispatch } from "redux"
import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication

import {AuthAction, AuthActionTypes} from '../types/authTypes'

export function changeUser(user: object | undefined | boolean): AuthAction {
  return { type: AuthActionTypes.CHANGE_USER, payload: user }
}

export const setError = (error: null | string): AuthAction => {
  return {type: AuthActionTypes.ERROR, payload: error}
}
export const setSuccess = (success: null | string): AuthAction => {
  return {type: AuthActionTypes.SUCCESS, payload: success}
}

export const signIn = (email: string, password: string, remember: boolean) => {
  return (dispatch: Dispatch<AuthAction>) => {
    const session = (remember) ? 'LOCAL' : 'SESSION'
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence[session])
      .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential: any) => {
            console.log(userCredential.user)
            dispatch(changeUser(userCredential.user));

            (remember)
              ? localStorage.setItem('user', JSON.stringify(userCredential.user))
              : sessionStorage.setItem('user', JSON.stringify(userCredential.user))

          })
      })
      .catch((error) => {
        dispatch(setError(error.code))
        switch (error.code) {
          case 'auth/user-not-found':
            dispatch(setError('Email или пароль введены не верно'))
            break;
          case 'auth/wrong-password':
            dispatch(setError('Email или пароль введены не верно'))
            break;
          default:
            dispatch(setError(error.message))
        }
      });

  }
}

export const signUp = (email: string, password: string) => {
  return (dispatch: Dispatch<AuthAction>) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        dispatch(changeUser(userCredential.user))
        localStorage.setItem('user', JSON.stringify(userCredential.user))
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            dispatch(setError('Такой email уже используется'))
            break;
          default:
            dispatch(setError(error.message))
        }
      })
  }
}

export const sendPasswordReset = (email: string) => {
  return (dispatch: Dispatch<AuthAction>) => {
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      dispatch(setSuccess(`Письмо отправлено на почту ${email}`))

    }).catch(function(error) {
      switch (error.code) {
        case 'auth/user-not-found':
          dispatch(setError('Такой пользователь не зарегистрирован'))
          break;
        default:
          dispatch(setError(error.message))
      }
    });
  }

}


export const signOut = () => {
  return (dispatch: Dispatch<AuthAction>) => {

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(changeUser(false))
        localStorage.clear()
        sessionStorage.clear()
      })
  }
}