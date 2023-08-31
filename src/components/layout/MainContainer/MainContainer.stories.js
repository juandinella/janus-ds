import MainContainer from './MainContainer'

import {
  getTemplate,
} from '../../../helpers/storybook'

import Header from '../../molecules/Header'
import MessageInput from '../../molecules/MessageInput'
import HeaderContainer from '../HeaderContainer'
import MessageInputContainer from '../MessageInputContainer'
import MessagesContainer from '../MessagesContainer'
const Template = getTemplate(MainContainer)

export default {
  title: 'Layout/MainContainer',
  component: MainContainer,
  args: {
    children: (
      <>
        <HeaderContainer>
          <Header
            isOnline
            lastSeen="Active now"
            username="Juan Di Nella"
          />
        </HeaderContainer>
        <MessagesContainer />
        <MessageInputContainer>
          <MessageInput />
        </MessageInputContainer>
      </>
    )
  },
  argTypes: {},
  parameters: { __sb: { h: '500px' } },
}

export const Default = Template.bind({})
