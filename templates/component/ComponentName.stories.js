import ComponentName from './ComponentName'
import { options } from './constants'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(ComponentName)
const ListTemplate = getListTemplate(ComponentName)

export default {
  title: 'Atomic/ComponentName',
  component: ComponentName,
  args: {},
  argTypes: {
    variant: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((variant) => ({ variant })) }
