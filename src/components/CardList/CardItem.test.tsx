import React from 'react'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, {MockStore} from 'redux-mock-store'

import CardItem from "./CardItem"
import {removeTodo, setTitleTodo} from '../../store/actions/cardsActions'

const mockStore = configureStore([])

describe('CardItem Component', () => {
  let store : MockStore
  let component : ReactTestRenderer

  beforeEach(() => {
    store = mockStore()
    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <CardItem todoDB={{title: '123', id: 1}} cardID={0}/>
      </Provider>
    )
  })

  it('should render with given state from props', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should dispatch an action on input change', () => {
    renderer.act(() => {
      component.root.findByType('input')
        .props.onChange({ target: { value: 'New Title' } })

      expect(store.dispatch).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledWith(
        setTitleTodo(0, 1, 'New Title')
      )
    })
  })

  it('should dispatch an action on removeButton click', () => {
    renderer.act(() => {
      component.root.findByProps({className: "card__item_delete"}).props.onClick()

      expect(store.dispatch).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledWith(
        removeTodo(0, 1)
      )
    })
  })
})