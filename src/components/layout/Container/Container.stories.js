import { options } from './constants'
import Container from './Container'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Container)
const ListTemplate = getListTemplate(Container)

export default {
  title: 'Layout/Container',
  component: Container,
  args: {
    children: 'This is a Child!',
    isPlayground: true,
    flex: true,
  },
  argTypes: {
    tag: {control: 'text'},
    gap: {
      control: 'text',
      description: 'The space between containers. Supports responsive design.',
    },
    mobileGap: {
      control: 'text',
      description: 'The space between containers for mobile.',
    },
    space: {
      control: 'text',
      description: 'Vertical and horizontal padding for desktop. E.g. "xs" or "xs, lg".'
    },
    mobileSpace: {
      control: 'text',
      description: 'Vertical and horizontal padding for mobile. If not provided, desktop values will be used.'
    },
    justifyContent: {
      ...getOptionsArgTypes(options.justifyContent, 'justifyContent'),
      description: 'Justify content for mobile and desktop, separated by a comma. E.g. "flex-start, center".'
    },
    alignItems: {
      ...getOptionsArgTypes(options.alignItems, 'alignItems'),
      description: 'Align items vertically in the container. E.g. "flex-start, center".',
    },
  },
}

export const Default = Template.bind({})

export const Responsive = { args: { space: 'xs, xl' } }

export const Spaces = ListTemplate.bind({})
Spaces.args = { items: options.spaces.map((space) => ({ space })) }
