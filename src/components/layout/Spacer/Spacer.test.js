import initStoryshots from '@storybook/addon-storyshots'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Spacer from './Spacer'

initStoryshots({
  storyKindRegex: /^Layout\/Spacer$/,
})

const componentProps = {
  id: 'spacer',
  size: '24',
}

afterEach(cleanup)

describe('<Spacer />', () => {
  test('should render component correctly', () => {
    render(<Spacer {...componentProps} />)
    const spacer = screen.getByTestId(componentProps.id)
    expect(spacer).toBeInTheDocument()
  })

  test('should render horizontal correctly', () => {
    render(<Spacer.Horizontal {...componentProps} />)
    const spacer = screen.getByTestId(componentProps.id)
    expect(spacer).toBeInTheDocument()
  })

  test('should render vertical correctly', () => {
    render(<Spacer.Vertical {...componentProps} />)
    const spacer = screen.getByTestId(componentProps.id)
    expect(spacer).toBeInTheDocument()
  })

  test('should render component with correct size', () => {
    render(<Spacer {...componentProps} />)
    const spacer = screen.getByTestId(componentProps.id)
    expect(spacer).toHaveAttribute('size', `${componentProps.size}`)
  })
})
