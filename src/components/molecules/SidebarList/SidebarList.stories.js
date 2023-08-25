import { options } from './constants'
import SidebarList from './SidebarList'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(SidebarList)
const ListTemplate = getListTemplate(SidebarList)


export default {
  title: 'Molecules/SidebarList',
  component: SidebarList,
  args: {
    sidebarList: [
      {
        username: 'Gonzalo Ricco',
        lastMessage: 'Qué hacés papá?',
        lastSeen: '1w',
        isOnline: true,
      },
      {
        username: 'Juan Di Nella',
        lastMessage: 'Hola, cómo estás?',
        lastSeen: '3w',
        isUnread: true,
      },
    ],
  },
  argTypes: {
    variant: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((variant) => ({ variant })) }
