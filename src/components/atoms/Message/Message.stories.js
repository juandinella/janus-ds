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
    variant: 'assistant',
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

export const user = {
  args: {
    backgroundColor: '#171717',
    variant: 'user',
  },
}

export const Variants = ListTemplate.bind({})
Variants.args = { items: options.variants.map((variant) => ({ variant })) }
