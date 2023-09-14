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
    variant: 'incoming',
  },
  {
    content: 'This is a message, test testing',
    variant: 'incoming',
  },
  {
    content:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    variant: 'outgoing',
  },
  {
    content: 'This is a message, test testing 😎',
    variant: 'outgoing',
  },
  {
    content: <a href="google.com">This is a link</a>,
    variant: 'outgoing',
  },
]

let questionList = [
  {
    children: 'Question number 1',
  },
  {
    children: 'Question number 2',
  },
  {
    children: 'Question number 3',
  },
  {
    children: 'Question number 4',
  },
  {
    children: 'Question number 5',
  },
  {
    children: 'Question number 6',
  },
  {
    children: 'Question number 7',
  },
  {
    children: 'Question number 8',
  },
  {
    children: 'Question number 9',
  },
  {
    children: 'Question number 10',
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
