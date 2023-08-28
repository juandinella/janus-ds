import { options } from './constants'
import MessageGroup from './MessageGroup'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(MessageGroup)
const ListTemplate = getListTemplate(MessageGroup)

let msgList = [
  {
    children: 'This is a message, test testing',
  },
  {
    children: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    children: 'This is a message, test testing',
  },
  {
    children: <a href='google.com'>This is a link</a>,
  },
]

export default {
  title: 'Molecules/MessageGroup',
  component: MessageGroup,
  args: {
    messages: [...msgList],
    direction: 'incoming'
  },
  argTypes: {
    ...getOptionsArgTypes(options.directions, 'direction'),
  },
}

export const Default = Template.bind({})

export const Directions = ListTemplate.bind({})
Directions.args = { items: options.directions.map((direction) => ({ direction })) }
