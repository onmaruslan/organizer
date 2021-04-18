import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
const mockStore = configureMockStore([thunk])
import {
  addCard, addNewCard, addTodo, changePositionCard, removeCard, removeTodo, setNewTodosAction, setTitleCard, setTitleTodo, updateCardsFromDB
} from '../actions/cardsActions'
import {CardsActionTypes, ICard} from '../types/cardsTypes'



describe('Test sync cardsActions', () => {

  test('actionCreator addNewCard', () => {
    const add = addNewCard()
    expect(add).toEqual({type: CardsActionTypes.ADD_NEW_CARD, payload: expect.any(Number)})
  })

  test('actionCreator addCard', () => {
    let emptyCard: ICard  = {
      title: '',
      id: 0,
      position: {x: 0, y: 10},
      todos: []
    }
    const add = addCard(emptyCard)
    expect(add).toEqual({type: CardsActionTypes.ADD_CARD, payload: emptyCard})
  })

  test('actionCreator removeCard', () => {
    const remove = removeCard(1)
    expect(remove).toEqual({type: CardsActionTypes.REMOVE_CARD, payload: 1})
  })

  test('actionCreator addTodo', () => {
    const add = addTodo(1)
    expect(add).toEqual({type: CardsActionTypes.ADD_TODO, payload: {idCard: 1, idTodo: expect.any(Number)}})
  })

  test('actionCreator removeTodo', () => {
    const remove = removeTodo(0, 1)
    expect(remove).toEqual({type: CardsActionTypes.REMOVE_TODO, payload: {idCard: 0, idTodo: 1}})
  })

  test('actionCreator setTitleCard', () => {
    const setTitle = setTitleCard(0, 'lorem')
    expect(setTitle).toEqual({type: CardsActionTypes.SET_TITLE, payload: {id: 0, title: 'lorem'}})
  })

  test('actionCreator setTitleTodo', () => {
    const setTitle = setTitleTodo(0, 1, 'lorem')
    expect(setTitle).toEqual({type: CardsActionTypes.SET_TITLE_TODO, payload: {idCard: 0, idTodo: 1, title: 'lorem'}})
  })

  test('actionCreator changePositionCard', () => {
    const changePosition = changePositionCard(0, 10, 15)
    expect(changePosition).toEqual({type: CardsActionTypes.CHANGE_POSITION_CARD, payload: {idCard: 0, x: 10, y: 15}})
  })

  test('actionCreator setNewTodosAction', () => {
    const setNewTodos = setNewTodosAction(0, [{id: 1, title: 'lorem'}])
    expect(setNewTodos).toEqual({
      type: CardsActionTypes.SET_NEW_TODOS,
      payload: {
        idCard: 0,
        newTodos: [{id: 1, title: 'lorem'}]
      }
    })
  })

})