interface IPositionCard {
  x: number
  y: number
}

export interface ISetTodoTitle {
  title: string
  idCard: number
  idTodo: number
}
export interface ITodo {
  title: string
  id: number
}
export interface ICard {
  title: string
  id: number
  position: IPositionCard
  todos: Array<ITodo>
}

export interface CardsState {
  cards: Array<ICard>
}

export enum CardsActionTypes {
  ADD_NEW_CARD = 'ADD_NEW_CARD',
  ADD_CARD = 'ADD_CARD',
  REMOVE_CARD = 'REMOVE_CARD',
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  SET_TITLE = 'SET_TITLE',
  SET_TITLE_TODO = 'SET_TITLE_TODO',
  CHANGE_POSITION_CARD = 'CHANGE_POSITION_CARD',
  SET_NEW_TODOS = 'SET_NEW_TODOS'

}

interface addNewCardAction {
  type: CardsActionTypes.ADD_NEW_CARD
  payload: number
}
interface addCardAction {
  type: CardsActionTypes.ADD_CARD
  payload: ICard
}
interface removeCardAction {
  type: CardsActionTypes.REMOVE_CARD
  payload: number
}

interface addTodoAction {
  type: CardsActionTypes.ADD_TODO
  payload: { idCard: number, idTodo: number }
}
interface removeTodoAction {
  type: CardsActionTypes.REMOVE_TODO
  payload: { idCard: number, idTodo: number }
}

interface setTitleAction {
  type: CardsActionTypes.SET_TITLE
  payload: ITodo
}
interface setTitleTodoAction {
  type: CardsActionTypes.SET_TITLE_TODO
  payload: ISetTodoTitle
}

interface changePositionCardAction {
  type: CardsActionTypes.CHANGE_POSITION_CARD
  payload: {idCard: number, x: number, y: number}
}

interface setNewTodosAction {
  type: CardsActionTypes.SET_NEW_TODOS
  payload: {newTodos: ITodo[], idCard: number}
}

export type CardsAction =
  addNewCardAction
  | addTodoAction
  | setTitleAction
  | setTitleTodoAction
  | removeCardAction
  | removeTodoAction
  | changePositionCardAction
  | setNewTodosAction
  | addCardAction