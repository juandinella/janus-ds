import SidebarContainer from './SidebarContainer'

import {
  getTemplate,
} from '../../../helpers/storybook'

import NewMessageButton from '../../atoms/NewMessageButton'
import Search from '../../atoms/Search'
import Container from '../../layout/Container'
import Spacer from '../../layout/Spacer'
import SidebarList from '../../molecules/SidebarList'


const Template = getTemplate(SidebarContainer)

export default {
  title: 'Layout/SidebarContainer',
  component: SidebarContainer,
  args: {
    children: (
      <>
        <Container flex alignItems='center'>
          <Search placeholder='Buscá lo quieras' />
          <Spacer size='12' />
          <NewMessageButton />
        </Container>
        <Spacer size='32' />
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
              lastMessage: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
      </>
    )
  },
  argTypes: {

  },
}

export const Default = Template.bind({})

