import MessageInput from './MessageInput'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(MessageInput)

export default {
  title: 'Molecules/MessageInput',
  component: MessageInput,
  args: {
    onSendMessage: (...args) => {
      console.log('Action from Storybook, args are: ', args)
    },
  },
  argTypes: {
    onSendMessage: {
      action: 'sent',
      description: 'Callback when the send button is clicked',
    },
  },
}

export const Default = Template.bind({})
