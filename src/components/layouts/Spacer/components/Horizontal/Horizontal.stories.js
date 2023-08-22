import Horizontal from './Horizontal'
import { options } from '../../constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../../../helpers/storybook'

const Template = getTemplate(Horizontal)
const ListTemplate = getListTemplate(Horizontal)

export default {
  title: 'Layout/Spacer/Horizontal',
  component: Horizontal,
  args: {
    isPlayground: true,
  },
  argTypes: {
    ...getOptionsArgTypes(options.sizes, 'size'),
    ...getOptionsArgTypes(options.sizes, 'mobileSize'),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
