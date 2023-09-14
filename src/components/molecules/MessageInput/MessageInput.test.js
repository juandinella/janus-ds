import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import MessageInput from './MessageInput'

initStoryshots({
  storyKindRegex: /^Molecules\/MessageInput$/,
})

const componentProps = {
  id: 'unique_id',
}

afterEach(cleanup)

describe('<MessageInput />', () => {
  test('should render component correctly', () => {
    render(<MessageInput {...componentProps} />)
    const comp = screen.getByTestId(componentProps.id)
    expect(comp).toBeInTheDocument()
  })
})
