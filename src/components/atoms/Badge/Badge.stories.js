import Badge from './Badge'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Badge)

export default {
  title: 'Atoms/Badge',
  component: Badge,
  args: {},
  argTypes: {},
}

export const Default = Template.bind({})
