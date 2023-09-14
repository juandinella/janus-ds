import ChatToggle from './ChatToggle'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(ChatToggle)

export default {
  title: 'Atoms/ChatToggle',
  component: ChatToggle,
  args: {
    color: '#FFFFFF',
    backgroundColor: '#171717',
  },
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
}

export const Default = Template.bind({})
