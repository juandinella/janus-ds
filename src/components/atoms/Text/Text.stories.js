import { options } from './constants'
import Text from './Text'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Text)
const ListTemplate = getListTemplate(Text)

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    size: 'lg',
  },
  argTypes: {
    ...getOptionsArgTypes(options.sizes, 'size'),
    ...getOptionsArgTypes(options.types, 'type'),
    ...getOptionsArgTypes(options.weights, 'weight'),
    ...getOptionsArgTypes(options.alignments, 'alignment'),
    ...getOptionsArgTypes(options.transforms, 'transform'),
    ...getOptionsArgTypes(options.colors, 'color'),
  },
}

export const Default = Template.bind({})

export const Responsive = { args: { size: ['xs', 'xl'] } }

export const LineClamp = { args: { lineClamp: 1 } }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const Weights = ListTemplate.bind({})
Weights.args = { items: options.weights.map((weight) => ({ weight })) }

export const Alignments = ListTemplate.bind({})
Alignments.args = {
  items: options.alignments.map((alignment) => ({ alignment })),
}

export const Transforms = ListTemplate.bind({})
Transforms.args = {
  items: options.transforms.map((transform) => ({ transform })),
}

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }
