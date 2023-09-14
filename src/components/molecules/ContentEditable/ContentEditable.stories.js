import ContentEditable from './ContentEditable'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(ContentEditable)

export default {
  title: 'Molecules/ContentEditable',
  component: ContentEditable,
  args: {
    placeholder: 'Ask your question here...',
  },
  argTypes: {},
}

export const Default = Template.bind({})
