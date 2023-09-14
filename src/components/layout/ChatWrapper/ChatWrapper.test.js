import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import ChatWrapper from './ChatWrapper'

initStoryshots({
  storyKindRegex: /^Layouts\/ChatWrapper$/,
})

const componentProps = {
  id: 'unique_id',
  children: <span data-testid="container_span">Im a span</span>,
}
afterEach(cleanup)

describe('<ChatWrapper />', () => {
  test('should render component correctly', () => {
    render(<ChatWrapper {...componentProps} />)
    const comp = screen.getByTestId(componentProps.id)
    expect(comp).toBeInTheDocument()
  })
  test('should render children correctly', () => {
    const { queryByTestId } = render(<ChatWrapper {...componentProps} />)
    expect(queryByTestId(componentProps.id).children).toHaveLength(1)
    expect(queryByTestId('container_span')).toBeTruthy()
    expect(queryByTestId('container_span').textContent).toEqual('Im a span')
  })
})
