import {HomeAction, HomeActionTypes, HomeState, Todo, Card} from '../types/homeTypes'


const initialTodo : Todo = {
  title: '',
  id: Date.now()
}
const initialCard : Card = {
  title: '',
  id: Date.now(),
  position: {x: 0, y: 0},
  todos: []
}

const initialState: HomeState = {
  cards: []
}

export const homeReducer = (state = initialState, action: HomeAction): HomeState => {
  switch (action.type) {
    case HomeActionTypes.ADD_CARD:
      return {...state, cards: [...state.cards, {...initialCard, id: action.payload}]}

    case HomeActionTypes.ADD_TODO:
      const newCardsTodo = state.cards.map( (item) => (item!.id === action.payload.idCard)
        ? {...item, todos: [...item!.todos, {...initialTodo, id: action.payload.idTodo}]}
        : item)
      return {...state, cards: newCardsTodo}

    case HomeActionTypes.SET_TITLE:
      const newCardsTitle = state.cards.map( (item) => (item!.id === action.payload.id)
        ? {...item, title: action.payload.title}
        : item)
      return {...state, cards: newCardsTitle}

    case HomeActionTypes.SET_TITLE_TODO:
      const newCardsTitleTodo = state.cards.map( (item) => (item!.id === action.payload.idCard)
        ? {...item, todos: item.todos.map((i) => (i.id === action.payload.idTodo) ? {...i, title: action.payload.title}: i)}
        : item)
      return {...state, cards: newCardsTitleTodo}

    default:
      return state
  }
}