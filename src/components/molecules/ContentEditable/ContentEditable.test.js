import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import ContentEditable from './ContentEditable'

initStoryshots({
  storyKindRegex: /^Molecules\/ContentEditable$/,
})

const componentProps = {
  id: 'unique_id',
  placeholder: 'Ask your question here...',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  onInput: jest.fn(),
}
afterEach(cleanup)
beforeEach(() => {
  componentProps.onChange.mockClear()
  componentProps.onBlur.mockClear()
  componentProps.onInput.mockClear()
})

describe('<ContentEditable />', () => {
  test('should render component correctly', () => {
    const { getByTestId } = render(<ContentEditable {...componentProps} />)
    const comp = getByTestId(componentProps.id)
    expect(comp).toBeInTheDocument()
    expect(comp).toHaveAttribute('contentEditable', 'true')
  })

  test('should display placeholder correctly', () => {
    const { getByTestId } = render(<ContentEditable {...componentProps} />)
    const comp = getByTestId(componentProps.id)

    expect(comp).toHaveAttribute('aria-label', componentProps.placeholder)
  })
})
