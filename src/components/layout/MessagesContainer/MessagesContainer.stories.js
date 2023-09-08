import MessagesContainer from './MessagesContainer'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(MessagesContainer)

export default {
  title: 'Layout/MessagesContainer',
  component: MessagesContainer,
  args: {},
  argTypes: {},
}

export const Default = Template.bind({})
