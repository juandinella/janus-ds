import Textarea from './Textarea'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Textarea)

export default {
  title: 'Molecules/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Ask your question here...',
  },
  argTypes: {},
}

export const Default = Template.bind({})
