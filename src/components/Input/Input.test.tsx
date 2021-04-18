import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import Input from './Input'

describe('Input Component', () => {
  let container : HTMLElement | null = null

  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
  })

  afterEach(() => {
  if (container) {
    unmountComponentAtNode(container)
    container.remove()
  }
    container = null
  });



  it("renders component Input", () => {
    act(() => {
      render(<Input type="email" placeholder="example@email.com" label="Email" errorText={undefined}/>, container)
    })
    if (container) {
      expect(container.querySelector('input')!.getAttribute('type')).toBe('email')
      expect(container.querySelector('input')!.getAttribute('placeholder')).toBe('example@email.com')
      expect(container.querySelector('label')!.textContent).toBe('Email')
      expect(container.querySelector('.auth-error')).toBeFalsy()
    }

    act(() => {
      render(<Input type="checkbox" label="checkbox" errorText={'Lorem'}/>, container)
    })
    if (container) {
      expect(container.querySelector('input')!.getAttribute('type')).toBe('checkbox')
      expect(container.querySelector('label')!.querySelector('svg')).toBeTruthy()
      expect(container.querySelector('.auth-error')).toBeTruthy()
    }
  })
})