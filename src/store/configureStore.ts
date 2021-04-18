import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {authReducer} from './reducers/authReducer'
import {cardsReducer} from './reducers/cardsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    cards: cardsReducer
})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))