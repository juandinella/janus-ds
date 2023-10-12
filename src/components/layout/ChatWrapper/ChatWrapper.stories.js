import ChatWrapper from './ChatWrapper'
import { getTemplate } from '../../../helpers/storybook'
import Conversation from '../../molecules/Conversation'
import Header from '../../molecules/Header'
import MessageInput from '../../molecules/MessageInput'
import SuggestedQuestions from '../../molecules/SuggestedQuestions'
import MainContainer from '../MainContainer'

const Template = getTemplate(ChatWrapper)

let conversationList = [
  {
    content: 'Hola Hola',
    role: 'assistant',
  },
  {
    content: 'This is a message, test testing',
    role: 'assistant',
  },
  {
    content:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    role: 'user',
  },
  {
    content: 'This is a message, test testing 😎',
    role: 'user',
  },
  {
    content: <a href="google.com">This is a link</a>,
    role: 'user',
  },
]

let questionList = [
  {
    text: 'Question number 1',
  },
  {
    text: 'Question number 2',
  },
  {
    text: 'Question number 3',
  },
]

export default {
  title: 'Layout/ChatWrapper',
  component: ChatWrapper,
  args: {
    children: (
      <MainContainer>
        <Header text="Chat with Janus" />
        <Conversation messages={[...conversationList]} />
        <SuggestedQuestions questions={[...questionList]} />
        <MessageInput placeholder="Type a message..." />
      </MainContainer>
    ),
  },
  argTypes: {},
  parameters: { __sb: { h: '800px' } },
}

export const Default = Template.bind({})
