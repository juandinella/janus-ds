import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import SendButton from './SendButton'

initStoryshots({
  storyKindRegex: /^Atoms\/SendButton$/,
})

const componentProps = {
  id: 'unique_id',
  onClick: jest.fn(),
}
afterEach(cleanup)
beforeEach(() => {
  componentProps.onClick.mockClear()
})

describe('<SendButton />', () => {
  test('should render component correctly', () => {
    render(<SendButton {...componentProps} />)
    const btn = screen.getByTestId(componentProps.id)
    expect(btn).toBeInTheDocument()
  })
  test('should call function on click', () => {
    const { getByTestId } = render(<SendButton {...componentProps} />)
    const button = getByTestId(componentProps.id)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(componentProps.onClick).toHaveBeenCalledTimes(2)
  })
})
