import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import Search from './Search'

initStoryshots({
  storyKindRegex: /^Atoms\/Search$/,
})

const componentProps = {
  id: 'unique_id',
  placeholder: 'Search...',
}
afterEach(cleanup)

describe('<Search />', () => {
  test('should render component correctly', () => {
    render(<Search {...componentProps} />)
    const search = screen.getByTestId(componentProps.id)
    expect(search).toBeInTheDocument()
  })

  test('should display placeholder correctly', () => {
    render(<Search {...componentProps} />)
    const input = screen.getByPlaceholderText(componentProps.placeholder)
    expect(input).toBeInTheDocument()
  })

  test('should call onChange when input changes', () => {
    const mockOnChange = jest.fn()
    render(<Search {...componentProps} onChange={mockOnChange} />)
    const input = screen.getByTestId(`${componentProps.id}-input`)
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })

  test('should update input value correctly', () => {
    const mockValue = 'search text'
    const mockOnChange = jest.fn()
    render(
      <Search {...componentProps} value={mockValue} onChange={mockOnChange} />,
    )
    const input = screen.getByTestId(`${componentProps.id}-input`)
    expect(input.value).toBe(mockValue)
  })
})
