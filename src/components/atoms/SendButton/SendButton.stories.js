import SendButton from './SendButton'

import {
  getTemplate,
} from '../../../helpers/storybook'

const Template = getTemplate(SendButton)


export default {
  title: 'Atoms/SendButton',
  component: SendButton,
  args: {},
  argTypes: {
  },
}

export const Default = Template.bind({})

