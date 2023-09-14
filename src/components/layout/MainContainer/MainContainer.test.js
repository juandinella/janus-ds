import initStoryshots from '@storybook/addon-storyshots'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import MainContainer from './MainContainer'

initStoryshots({
  storyKindRegex: /^Layout\/MainContainer$/,
})

const componentProps = {
  id: 'container',
  children: <span data-testid="container_span">Im a span</span>,
}

afterEach(cleanup)

describe('<MainContainer />', () => {
  test('should render component correctly', () => {
    render(<MainContainer {...componentProps} />)
    const container = screen.getByTestId(componentProps.id)
    expect(container).toBeInTheDocument()
  })

  test('should render children correctly', () => {
    const { queryByTestId } = render(<MainContainer {...componentProps} />)
    expect(queryByTestId(componentProps.id).children).toHaveLength(1)
    expect(queryByTestId('container_span')).toBeTruthy()
    expect(queryByTestId('container_span').textContent).toEqual('Im a span')
  })
})
