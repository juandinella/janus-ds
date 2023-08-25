import SidebarItem from './SidebarItem'

import {
  getTemplate,
} from '../../../helpers/storybook'

const Template = getTemplate(SidebarItem)

export default {
  title: 'Molecules/SidebarItem',
  component: SidebarItem,
  args: {
    username: 'Gonzalo Ricco',
    lastMessage: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    lastSeen: '3w',
    isOnline: true,
  },
  argTypes: {
  },
}

export const Default = Template.bind({})
