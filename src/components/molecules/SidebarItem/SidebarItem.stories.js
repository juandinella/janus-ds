import SidebarItem from './SidebarItem'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(SidebarItem)

export default {
  title: 'Molecules/SidebarItem',
  component: SidebarItem,
  args: {
    username: 'Gonzalo Ricco',
    lastMessage:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    lastSeen: '3w',
  },
  argTypes: {},
}

export const Default = Template.bind({})

export const IsOnline = { args: { isOnline: true } }

export const IsUnread = { args: { isUnread: true } }
