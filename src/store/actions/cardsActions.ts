import { Dispatch } from "redux"
import firebase from 'firebase/app'
import {HomeAction, HomeActionTypes} from '../types/homeTypes'


export function addCard(): HomeAction {
  return { type: HomeActionTypes.ADD_CARD , payload: Date.now()}
}
export function addTodo(idCard: number): HomeAction {
  return { type: HomeActionTypes.ADD_TODO , payload: {idCard: idCard, idTodo: Date.now()}}
}