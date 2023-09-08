import MessageInputContainer from './MessageInputContainer'

import { getTemplate } from '../../../helpers/storybook'

import MessageInput from '../../molecules/MessageInput'

const Template = getTemplate(MessageInputContainer)

export default {
  title: 'Layout/MessageInputContainer',
  component: MessageInputContainer,
  args: {
    children: <MessageInput />,
  },
  argTypes: {},
  parameters: { __sb: { h: '100px' } },
}

export const Default = Template.bind({})
