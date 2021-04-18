import React from 'react'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, {MockStore} from 'redux-mock-store'

import Logout from './Logout'
import { signOut } from '../../store/actions/authActions'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

describe('Logout Component', () => {
  let store : MockStore
  let component : ReactTestRenderer

  beforeEach(() => {
    store = mockStore({})
    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <Logout />
      </Provider>
    )
  })

  // it('should render with given state from props', () => {
  //   expect(component.toJSON()).toMatchSnapshot()
  // })

  it('should dispatch an action signOut() on click', () => {
    renderer.act(() => {
      component.root.findByProps({className: "logout"}).props.onClick()
      console.log(store.dispatch)

      expect(store.dispatch).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledWith(
        signOut()
      )
    })
  })

})