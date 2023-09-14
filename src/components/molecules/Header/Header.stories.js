import Header from './Header'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Header)

export default {
  title: 'Molecules/Header',
  component: Header,
  args: {
    text: 'Chat with Janus',
  },
  argTypes: {},
}

export const Default = Template.bind({})
