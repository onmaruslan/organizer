import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App';
import {store} from './store/configureStore'
import {Provider} from 'react-redux'
import {unmountComponentAtNode} from 'react-dom'

test('renders App', () => {
  const div = document.createElement('div')
  render(<Provider store={store}><App /></Provider>)
  unmountComponentAtNode(div)
})