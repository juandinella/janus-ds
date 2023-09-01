import initStoryshots from '@storybook/addon-storyshots'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import NewMessageButton from './NewMessageButton'

initStoryshots({
  storyKindRegex: /^Atoms\/NewMessageButton$/,
})

const componentProps = {
  id: 'unique_id',
  onClick: jest.fn(),
}
afterEach(cleanup)
beforeEach(() => {
  componentProps.onClick.mockClear()
})

describe('<NewMessageButton />', () => {
  test('should render component correctly', () => {
    render(<NewMessageButton {...componentProps} />)
    const btn = screen.getByTestId(componentProps.id)
    expect(btn).toBeInTheDocument()
  })

  test('should call function on click', () => {
    const { getByTestId } = render(<NewMessageButton {...componentProps} />)
    const button = getByTestId(componentProps.id)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(componentProps.onClick).toHaveBeenCalledTimes(2)
  })
})
