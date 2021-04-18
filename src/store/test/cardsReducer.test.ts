import {cardsReducer} from '../reducers/cardsReducer'
import {CardsActionTypes, CardsState, ICard} from '../types/cardsTypes'

describe('Test cardsReducer', () => {
  let state: CardsState
  let emptyCard: ICard
  beforeEach(() => {
    state = {
      cards: []
    }

    emptyCard = {
      title: '',
      id: 0,
      position: {x: 0, y: 10},
      todos: []
    }
  })

  test('cardsReducer for ADD_NEW_CARD', () => {
    state = cardsReducer(state, {type: CardsActionTypes.ADD_NEW_CARD, payload: 0})
    expect(state).toEqual({cards: [emptyCard]})
  })

  test('cardsReducer for ADD_CARD', () => {
    state = cardsReducer(state, {
      type: CardsActionTypes.ADD_CARD,
      payload: emptyCard
    })
    expect(state).toEqual({cards: [emptyCard]})
  })

  test('cardsReducer for REMOVE_CARD', () => {
    let stateForRemoveCard = {cards: [emptyCard]}
    stateForRemoveCard = cardsReducer(stateForRemoveCard, {
      type: CardsActionTypes.REMOVE_CARD,
      payload: 0
    })

    expect(stateForRemoveCard).toEqual({cards: []})
  })

  test('cardsReducer for ADD_TODO', () => {
    let stateForAddTodo = {cards: [emptyCard]}
    stateForAddTodo = cardsReducer(stateForAddTodo, {
      type: CardsActionTypes.ADD_TODO,
      payload: {idCard: 0, idTodo: 1}
    })

    expect(stateForAddTodo).toEqual({
      cards: [
        {...emptyCard, todos: [{title: '', id: 1}]}
      ]
    })
  })

  test('cardsReducer for REMOVE_TODO', () => {
    let stateForRemoveTodo = {
      cards: [{...emptyCard, todos: [{title: '', id: 1}]}]
    }
    stateForRemoveTodo = cardsReducer(stateForRemoveTodo, {
      type: CardsActionTypes.REMOVE_TODO,
      payload: {idCard: 0, idTodo: 1}
    })

    expect(stateForRemoveTodo).toEqual({
      cards: [emptyCard]
    })
  })

  test('cardsReducer for SET_TITLE', () => {
    let stateForSetTitle = {
      cards: [ emptyCard ]
    }

    stateForSetTitle = cardsReducer(stateForSetTitle, {
      type: CardsActionTypes.SET_TITLE,
      payload: {id: 0, title: 'lorem'}
    })

    expect(stateForSetTitle).toEqual({
      cards: [ {...emptyCard, title: 'lorem'} ]
    })
  })

  test('cardsReducer for SET_TITLE_TODO', () => {
    let stateForSetTitleTodo = {
      cards: [ {...emptyCard, todos: [{id: 1, title: ''}]} ]
    }

    stateForSetTitleTodo = cardsReducer(stateForSetTitleTodo, {
      type: CardsActionTypes.SET_TITLE_TODO,
      payload: {idCard: 0, idTodo: 1, title: 'lorem'}
    })

    expect(stateForSetTitleTodo).toEqual({
      cards: [ {...emptyCard, todos: [{id: 1, title: 'lorem'}]} ]
    })
  })

  test('cardsReducer for CHANGE_POSITION_CARD', () => {
    let stateForChangePositionCard = {
      cards: [ emptyCard ]
    }

    stateForChangePositionCard = cardsReducer(stateForChangePositionCard, {
      type: CardsActionTypes.CHANGE_POSITION_CARD,
      payload: {idCard: 0, x: 42, y: 42}
    })

    expect(stateForChangePositionCard).toEqual({
      cards: [ {...emptyCard, position: {x: 42, y: 42}} ]
    })
  })

  test('cardsReducer for SET_NEW_TODOS', () => {
    let stateForSetNewTodoes = {
      cards: [ emptyCard ]
    }

    stateForSetNewTodoes = cardsReducer(stateForSetNewTodoes, {
      type: CardsActionTypes.SET_NEW_TODOS,
      payload: {idCard: 0, newTodos: [{id: 2, title: 'lorem'}]}
    })

    expect(stateForSetNewTodoes).toEqual({
      cards: [ {...emptyCard, todos: [{id: 2, title: 'lorem'}]} ]
    })
  })

})