import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import Loader from './Loader'

initStoryshots({
  storyKindRegex: /^Atoms\/Loader$/,
})

const componentProps = {
  id: 'unique_id',
  onClick: jest.fn(),
}
afterEach(cleanup)
beforeEach(() => {
  componentProps.onClick.mockClear()
})

describe('<Loader />', () => {
  test('should render component correctly', () => {
    render(<Loader {...componentProps} />)
    const comp = screen.getByTestId(componentProps.id)
    expect(comp).toBeInTheDocument()
  })
})
