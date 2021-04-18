import {CardsAction, CardsActionTypes, CardsState, ITodo, ICard} from '../types/cardsTypes'


const initialTodo : ITodo = {
  title: '',
  id: Date.now()
}
const initialCard : ICard = {
  title: '',
  id: Date.now(),
  position: {x: 0, y: 10},
  todos: []
}

const initialState: CardsState = {
  cards: []
}

export const cardsReducer = (state = initialState, action: CardsAction): CardsState => {
  switch (action.type) {
    case CardsActionTypes.ADD_NEW_CARD:
      return {...state, cards: [...state.cards, {...initialCard, id: action.payload}]}

    case CardsActionTypes.ADD_CARD:
      const cardExist: boolean = state.cards.some(card => card.id === action.payload.id)
      if (cardExist) return state
      else return {...state, cards: [...state.cards, {...action.payload}]}


    case CardsActionTypes.REMOVE_CARD:
      return {...state, cards: state.cards.filter(item => item.id !== action.payload)}

    case CardsActionTypes.ADD_TODO:
      const newCardTodo = state.cards.map( (item) => (item.id === action.payload.idCard)
        ? {...item, todos: [...item.todos, {...initialTodo, id: action.payload.idTodo}]}
        : item)
      return {...state, cards: newCardTodo}
    case CardsActionTypes.REMOVE_TODO:
      const newCardRemoveTodo = state.cards.map( (item) => (item.id === action.payload.idCard)
        ? {...item, todos: item.todos.filter(i => i.id !== action.payload.idTodo)}
        : item)
      return {...state, cards: newCardRemoveTodo}

    case CardsActionTypes.SET_TITLE:
      const newCardTitle = state.cards.map( (item) => (item.id === action.payload.id)
        ? {...item, title: action.payload.title}
        : item)
      return {...state, cards: newCardTitle}
    case CardsActionTypes.SET_TITLE_TODO:
      const newTitleTodo = state.cards.map( (item) => (item.id === action.payload.idCard)
        ? {...item, todos: item.todos.map((i) => (i.id === action.payload.idTodo) ? {...i, title: action.payload.title}: i)}
        : item)
      return {...state, cards: newTitleTodo}

    case CardsActionTypes.CHANGE_POSITION_CARD:
      const newCardPosition = state.cards.map( (item) => (item.id === action.payload.idCard)
        ? {...item, position: {x: action.payload.x, y: action.payload.y}}
        : item)
      return {...state, cards: newCardPosition}

    case CardsActionTypes.SET_NEW_TODOS:
      const newCardTodos = state.cards.map( (card) => (card.id === action.payload.idCard)
        ? {...card, todos: action.payload.newTodos}
        : card)
      return {...state, cards: newCardTodos}


    default:
      return state
  }
}