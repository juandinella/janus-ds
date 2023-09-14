import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import SuggestedQuestion from './SuggestedQuestion'

initStoryshots({
  storyKindRegex: /^Atoms\/SuggestedQuestion$/,
})

const componentProps = {
  id: 'unique_id',
  onClick: jest.fn(),
}
afterEach(cleanup)
beforeEach(() => {
  componentProps.onClick.mockClear()
})

describe('<SuggestedQuestion />', () => {
  test('should render component correctly', () => {
    render(<SuggestedQuestion {...componentProps} />)
    const btn = screen.getByTestId(componentProps.id)
    expect(btn).toBeInTheDocument()
  })
  test('should call function on click', () => {
    const { getByTestId } = render(<SuggestedQuestion {...componentProps} />)
    const button = getByTestId(componentProps.id)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(componentProps.onClick).toHaveBeenCalledTimes(2)
  })
})
