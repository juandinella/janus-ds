import HeaderContainer from './HeaderContainer'
import {
  getTemplate,
} from '../../../helpers/storybook'

import Header from '../../molecules/Header'


const Template = getTemplate(HeaderContainer)


export default {
  title: 'Layout/HeaderContainer',
  component: HeaderContainer,
  args: {
    children: (
      <Header
        isOnline
        lastSeen="Active now"
        username="Juan Di Nella"
      />
    )
  },
  argTypes: {
  },
}

export const Default = Template.bind({})
