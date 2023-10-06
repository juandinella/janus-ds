import Typing from './Typing'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Typing)

export default {
  title: 'Atoms/Typing',
  component: Typing,
  args: {},
  argTypes: {},
}

export const Default = Template.bind({})
