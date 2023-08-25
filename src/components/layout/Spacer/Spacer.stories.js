import { options } from './constants'
import Spacer from './Spacer'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Spacer)
const ListTemplate = getListTemplate(Spacer)

export default {
  title: 'Layout/Spacer',
  component: Spacer,
  args: {
    isPlayground: true,
  },
  argTypes: {
    ...getOptionsArgTypes(options.sizes, 'size'),
    ...getOptionsArgTypes(options.sizes, 'mobileSize'),
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
