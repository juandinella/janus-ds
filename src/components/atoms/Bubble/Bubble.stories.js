import Bubble from './Bubble'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Bubble)
const ListTemplate = getListTemplate(Bubble)

export default {
  title: 'Atoms/Bubble',
  component: Bubble,
  args: {
    children: <>Soy un mensaje de prueba con <a href="https://ejemplo.com">un enlace</a></>,
    variant: 'incoming',
    position: 'single',
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

