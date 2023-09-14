import Loader from './Loader'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Loader)

export default {
  title: 'Atoms/Loader',
  component: Loader,
  args: {},
  argTypes: {},
}

export const Default = Template.bind({})
