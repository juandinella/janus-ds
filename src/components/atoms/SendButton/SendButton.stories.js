import SendButton from './SendButton'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(SendButton)

export default {
  title: 'Atoms/SendButton',
  component: SendButton,
  args: {
    color: '#171717',
  },
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
}

export const Default = Template.bind({})

export const Disabled = { args: { disabled: true } }
