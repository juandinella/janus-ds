import SidebarContainer from './SidebarContainer'

import {
  getTemplate,
} from '../../../helpers/storybook'

import SidebarList from '../../molecules/SidebarList'


const Template = getTemplate(SidebarContainer)

export default {
  title: 'Layout/SidebarContainer',
  component: SidebarContainer,
  args: {
    children: (
      <SidebarList
        sidebarList={[
          {
            isOnline: true,
            isUnread: true,
            lastMessage: 'Qué hacés papá?',
            lastSeen: '1w',
            username: 'Gonzalo Ricco'
          },
          {
            isOnline: true,
            lastMessage: 'This is a message',
            lastSeen: '1w',
            username: 'Pepe Pijudo'
          },
          {
            lastMessage: 'Helloooo',
            lastSeen: '1h',
            username: 'Jason Miriapolis'
          },
          {
            lastMessage: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
            lastSeen: '1w',
            username: 'Elmer Cadito'
          },
          {
            lastMessage: 'Uti culiiii',
            lastSeen: '1w',
            username: 'Migue Granado'
          },
          {
            lastMessage: 'Hola, cómo estás?',
            lastSeen: '3w',
            username: 'Juan Di Nella'
          }
        ]}
      />
    )
  },
  argTypes: {

  },
}

export const Default = Template.bind({})

