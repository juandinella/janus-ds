import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import Avatar from './Avatar'

initStoryshots({
  storyKindRegex: /^Atoms\/Avatar$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Soy un mensaje de prueba',
  size: 'md',
  isOnline: true,
}
afterEach(cleanup)

describe('<Avatar />', () => {
  test('should render component correctly', () => {
    render(<Avatar {...componentProps} />)
    const avatar = screen.getByTestId(componentProps.id)
    expect(avatar).toBeInTheDocument()
  })
  test('should render children correctly', () => {
    render(<Avatar {...componentProps} />)
    const childrenElement = screen.getByTestId(`${componentProps.id}-children`)
    expect(childrenElement.textContent).toEqual(componentProps.children)
  })
})
