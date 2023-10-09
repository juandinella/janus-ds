import Conversation from './Conversation'
import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Conversation)

let conversationList = [
  {
    content: 'Hola Hola',
    role: 'aiMessage',
  },
  {
    content: 'This is a message, test testing',
    role: 'aiMessage',
  },
  {
    content:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    role: 'humanMessage',
  },
  {
    content: 'This is a message, test testing 😎',
    role: 'humanMessage',
  },
  {
    content: <a href="google.com">This is a link</a>,
    role: 'humanMessage',
  },
]

export default {
  title: 'Molecules/Conversation',
  component: Conversation,
  args: {
    messages: [...conversationList],
  },
  argTypes: {},
}

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = {
  isMessageLoading: true,
}
