import Avatar from './Avatar'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Avatar)
const ListTemplate = getListTemplate(Avatar)

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    children: 'gr',
    size: 'md',
  },
  argTypes: {
    ...getOptionsArgTypes(options.sizes, 'size'),
  },
}

export const Default = Template.bind({})

export const Online = { args: { size: 'lg', isOnline: true } }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
