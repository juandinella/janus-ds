import CloseButton from './CloseButton'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(CloseButton)

export default {
  title: 'Atoms/CloseButton',
  component: CloseButton,
  args: {},
  argTypes: {},
}

export const Default = Template.bind({})
