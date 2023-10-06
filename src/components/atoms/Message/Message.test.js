import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import Message from './Message'

initStoryshots({
  storyKindRegex: /^Atoms\/Message$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Soy un mensaje de prueba',
  variant: 'aiMessage',
}
afterEach(cleanup)

describe('<Message />', () => {
  test('should render component correctly', () => {
    render(<Message {...componentProps} />)
    const msg = screen.getByTestId(componentProps.id)
    expect(msg).toBeInTheDocument()
  })

  test('should render children correctly', () => {
    render(<Message {...componentProps} />)
    const childrenElement = screen.getByTestId(`${componentProps.id}-children`)
    expect(childrenElement.textContent).toEqual(componentProps.children)
  })
})
