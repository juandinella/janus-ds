import { options } from './constants'
import Message from './Message'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Message)
const ListTemplate = getListTemplate(Message)

export default {
  title: 'Molecules/Message',
  component: Message,
  args: {
    children: 'Soy un mensaje de prueba',
    direction: 'incoming'
  },
  argTypes: {
    ...getOptionsArgTypes(options.directions, 'direction'),
    ...getOptionsArgTypes(options.positions, 'position'),
  },
}

export const Default = Template.bind({})

export const SingleIncoming = { args: { direction: 'incoming', position: 'single' } }
export const SingleOutgoing = { args: { direction: 'outgoing', position: 'single' } }

