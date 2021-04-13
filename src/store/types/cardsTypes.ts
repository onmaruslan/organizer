interface Position {
  x: number
  y: number
}
export interface ISetTodoTitle {
  title: string
  idCard: number
  idTodo: number
}
export interface Todo {
  title: string
  id: number
}

export interface Card {
  title: string
  id: number
  position: Position
  todos: Array<Todo>
}

export interface HomeState {
  cards: Array<Card>
}

export enum HomeActionTypes {
  ADD_CARD = 'ADD_CARD',
  ADD_TODO = 'ADD_TODO',
  SET_TITLE = 'SET_TITLE',
  SET_TITLE_TODO = 'SET_TITLE_TODO'
}

interface addCardAction {
  type: HomeActionTypes.ADD_CARD
  payload: number
}
interface addTodoAction {
  type: HomeActionTypes.ADD_TODO
  payload: {idCard: number, idTodo: number}
}
interface setTitleAction {
  type: HomeActionTypes.SET_TITLE
  payload: Todo
}
interface setTitleTodoAction {
  type: HomeActionTypes.SET_TITLE_TODO
  payload: ISetTodoTitle
}

export type HomeAction = addCardAction | addTodoAction | setTitleAction | setTitleTodoAction