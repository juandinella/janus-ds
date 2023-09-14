import MainContainer from './MainContainer'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(MainContainer)

export default {
  title: 'Layout/MainContainer',
  component: MainContainer,
  args: {},
  argTypes: {},
}

export const Default = Template.bind({})
