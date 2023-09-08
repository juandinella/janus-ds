import Vertical from './Vertical'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../../../helpers/storybook'
import { options } from '../../constants'

const Template = getTemplate(Vertical)
const ListTemplate = getListTemplate(Vertical)

export default {
  title: 'Layout/Spacer/Vertical',
  component: Vertical,
  args: {
    isPlayground: true,
    height: 100,
    maxHeight: 100,
  },
  argTypes: {
    ...getOptionsArgTypes(options.sizes, 'size'),
    ...getOptionsArgTypes(options.sizes, 'mobileSize'),
    height: { control: 'number' },
    maxHeight: { control: 'number' },
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
