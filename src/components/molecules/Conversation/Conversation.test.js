import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import Conversation from './Conversation'

initStoryshots({
  storyKindRegex: /^Molecules\/Conversation$/,
})

let conversationList = [
  {
    content: 'Hola Hola',
    variant: 'assistant',
  },
  {
    content: 'This is a message, test testing',
    variant: 'assistant',
  },
  {
    content: 'This is a message, test testing 😎',
    variant: 'user',
  },
  {
    content: <a href="google.com">This is a link</a>,
    variant: 'user',
  },
]

const componentProps = {
  id: 'unique_id',
  messages: [...conversationList],
}

afterEach(cleanup)

describe('<Conversation />', () => {
  test('should render component correctly', () => {
    render(<Conversation {...componentProps} />)
    const conversation = screen.getByTestId(componentProps.id)
    expect(conversation).toBeInTheDocument()
  })
})
