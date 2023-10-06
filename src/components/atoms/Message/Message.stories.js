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
    variant: 'aiMessage',
    id: 'test',
    backgroundColor: '#171717',
  },
  argTypes: {
    ...getOptionsArgTypes(options.variants, 'variant'),
    backgroundColor: {
      control: { type: 'color' },
    },
  },
}

export const Default = Template.bind({})

export const HumanMessage = {
  args: {
    backgroundColor: '#171717',
    variant: 'humanMessage',
  },
}

export const Variants = ListTemplate.bind({})
Variants.args = { items: options.variants.map((variant) => ({ variant })) }

export const Loading = { args: { loading: true } }
