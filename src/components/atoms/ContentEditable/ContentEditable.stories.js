import ContentEditable from './ContentEditable'

import {
  getTemplate,
} from '../../../helpers/storybook'

const Template = getTemplate(ContentEditable)

export default {
  title: 'Atoms/ContentEditable',
  component: ContentEditable,
  args: {
    children: 'Soy un text',
  },
  argTypes: {

  },
}

export const Default = Template.bind({})

