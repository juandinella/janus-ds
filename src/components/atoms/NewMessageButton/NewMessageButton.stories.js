import NewMessageButton from './NewMessageButton'


import {
  getTemplate,
} from '../../../helpers/storybook'

const Template = getTemplate(NewMessageButton)


export default {
  title: 'Atoms/NewMessageButton',
  component: NewMessageButton,
  args: {},
  argTypes: {

  },
}

export const Default = Template.bind({})

