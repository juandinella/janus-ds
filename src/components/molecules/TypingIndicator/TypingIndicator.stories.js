import TypingIndicator from './TypingIndicator'

import {
  getTemplate,
} from '../../../helpers/storybook'

const Template = getTemplate(TypingIndicator)

export default {
  title: 'Molecules/TypingIndicator',
  component: TypingIndicator,
  args: {
    children: 'Gonzalo Ricco is Typing'
  },
  argTypes: {
  },
}

export const Default = Template.bind({})
