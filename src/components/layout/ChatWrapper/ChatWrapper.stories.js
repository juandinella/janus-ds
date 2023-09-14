import ChatWrapper from './ChatWrapper'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(ChatWrapper)

export default {
  title: 'Layout/ChatWrapper',
  component: ChatWrapper,
  args: {
    children: 'hola',
  },
  argTypes: {},
}

export const Default = Template.bind({})
