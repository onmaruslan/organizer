import {CardsAction, CardsActionTypes, ICard, ITodo} from '../types/cardsTypes'
import React from 'react'
import {Dispatch} from 'redux'
import {removeCardDB} from '../../functions'
import firebase from 'firebase/app'
import 'firebase/firestore';   // for cloud firestore




export function addNewCard(): CardsAction {
  return {type: CardsActionTypes.ADD_NEW_CARD, payload: Date.now()}
}
export function addCard(card: ICard): CardsAction {
  return {type: CardsActionTypes.ADD_CARD, payload: card}
}

export function removeCard(idCard: number): CardsAction {
  return {type: CardsActionTypes.REMOVE_CARD, payload: idCard}
}

export function addTodo(idCard: number): CardsAction {
  return {type: CardsActionTypes.ADD_TODO, payload: {idCard, idTodo: Date.now()}}
}

export function removeTodo(idCard: number, idTodo: number): CardsAction {
  return {type: CardsActionTypes.REMOVE_TODO, payload: {idCard, idTodo}}
}

export function setTitleCard(id: number, title: string): CardsAction {
  return {type: CardsActionTypes.SET_TITLE, payload: {id, title}}
}

export function setTitleTodo(idCard: number, idTodo: number, title: string): CardsAction {
  return {type: CardsActionTypes.SET_TITLE_TODO, payload: {idCard, idTodo, title}}
}

export function changePositionCard(idCard: number, x: number, y: number): CardsAction {
  return {type: CardsActionTypes.CHANGE_POSITION_CARD, payload: {idCard, x, y}}
}

export function setNewTodosAction(idCard: number, newTodos: ITodo[]): CardsAction {
  return {type: CardsActionTypes.SET_NEW_TODOS, payload: {idCard, newTodos}}
}
export function resetCards(): CardsAction {
  return {type: CardsActionTypes.RESET_CARDS}
}

export function changePositionCardDispatch(e: React.MouseEvent<HTMLDivElement>, elem: HTMLDivElement | null, idCard: number) {
  return (dispatch: Dispatch<CardsAction>) => {
    if (elem) {
      const vw = document.documentElement.clientWidth / 100
      const getTransformElem = elem.style.transform.replace(/[^-.,\d]/g, '').split(',')

      const startXElem = +getTransformElem[0]
      const startYElem = +getTransformElem[1]
      const startXMouse = e.pageX
      const startYMouse = e.pageY

      elem.style.zIndex = '1000'
      elem.style.transition = 'none'
      document.onmousemove = function (e: MouseEvent) {
        const x = startXElem + (e.pageX - startXMouse) / vw
        const y = startYElem + (e.pageY - startYMouse) / vw
        dispatch(changePositionCard(idCard, x, y))
      }

      elem.onmouseup = function () {
        document.onmousemove = null
        elem.onmouseup = null
        elem.style.zIndex = '1'
      }
    }
  }
}


export function removeCardDispatch(id: number) {
  return (dispatch: Dispatch<CardsAction>) => {
    dispatch(removeCard(id))
    removeCardDB(id)
  }
}

export function updateCardsFromDB() {

  return (dispatch: Dispatch<CardsAction>) => {
    // const userEmail = firebase.auth().currentUser?.email
    const userEmail = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || 'undefined')?.email
    const db = firebase.firestore()

    if (userEmail) {
      db.collection(userEmail).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const card: ICard = {
            title: doc.data().title,
            id: doc.data().id,
            position: doc.data().position,
            todos: doc.data().todos
          }
          dispatch(addCard(card))
        });
      });
    }
  }

}