import initStoryshots from '@storybook/addon-storyshots'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Container from './Container'

initStoryshots({
  storyKindRegex: /^Layout\/Container$/,
})

const componentProps = {
  id: 'container',
  children: <span data-testid="container_span">Im a span</span>,
}

afterEach(cleanup)

describe('<Container />', () => {
  test('should render component correctly', () => {
    render(<Container {...componentProps} />)
    const container = screen.getByTestId(componentProps.id)
    expect(container).toBeInTheDocument()
  })

  test('should render children correctly', () => {
    const { queryByTestId } = render(<Container {...componentProps} />)
    expect(queryByTestId(componentProps.id).children).toHaveLength(1)
    expect(queryByTestId('container_span')).toBeTruthy()
    expect(queryByTestId('container_span').textContent).toEqual('Im a span')
  })

  test('should render tag correctly', () => {
    render(<Container {...componentProps} tag="span" />)
    const container = screen.getByTestId(componentProps.id)
    expect(container.tagName.toLowerCase()).toBe('span')
  })
})
