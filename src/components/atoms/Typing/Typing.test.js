import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import Typing from './Typing'

initStoryshots({
  storyKindRegex: /^Atoms\/Typing$/,
})

const componentProps = {
  id: 'unique_id',
}
afterEach(cleanup)

describe('<Typing />', () => {
  test('should render component correctly', () => {
    render(<Typing {...componentProps} />)
    const comp = screen.getByTestId(componentProps.id)
    expect(comp).toBeInTheDocument()
  })
})
