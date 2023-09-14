import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import ChatToggle from './ChatToggle'

initStoryshots({
  storyKindRegex: /^Atoms\/ChatToggle$/,
})

const componentProps = {
  id: 'unique_id',
  onClick: jest.fn(),
}
afterEach(cleanup)
beforeEach(() => {
  componentProps.onClick.mockClear()
})

describe('<ChatToggle />', () => {
  test('should render component correctly', () => {
    render(<ChatToggle {...componentProps} />)
    const btn = screen.getByTestId(componentProps.id)
    expect(btn).toBeInTheDocument()
  })
  test('should call function on click', () => {
    const { getByTestId } = render(<ChatToggle {...componentProps} />)
    const button = getByTestId(componentProps.id)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(componentProps.onClick).toHaveBeenCalledTimes(2)
  })
})
