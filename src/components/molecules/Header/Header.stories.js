import Header from './Header'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Header)

export default {
  title: 'Molecules/Header',
  component: Header,
  args: {
    username: 'Juan Di Nella',
    lastSeen: 'Active now',
    isOnline: true,
  },
  argTypes: {},
}

export const Default = Template.bind({})
