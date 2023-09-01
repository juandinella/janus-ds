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
  title: 'Atoms/Message',
  component: Message,
  args: {
    children: 'Soy un mensaje de prueba',
    variant: 'incoming',
    position: 'single',
    id: 'test'
  },
  argTypes: {
    ...getOptionsArgTypes(options.variants, 'variant'),
    ...getOptionsArgTypes(options.positions, 'position'),
  },
}

export const Default = Template.bind({})

export const Variants = ListTemplate.bind({})
Variants.args = { items: options.variants.map((variant) => ({ variant })) }

export const SingleIncoming = { args: { variant: 'incoming', position: 'single' } }
export const SingleOutgoing = { args: { variant: 'outgoing', position: 'single' } }

export const FirstIncoming = { args: { variant: 'incoming', position: 'first' } }
export const FirstOutgoing = { args: { variant: 'outgoing', position: 'first' } }

export const MiddleIncoming = { args: { variant: 'incoming', position: 'middle' } }
export const MiddleOutgoing = { args: { variant: 'outgoing', position: 'middle' } }

export const LastIncoming = { args: { variant: 'incoming', position: 'last' } }
export const LastOutgoing = { args: { variant: 'outgoing', position: 'last' } }

