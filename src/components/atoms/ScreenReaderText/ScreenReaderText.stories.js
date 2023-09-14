import ScreenReaderText from './ScreenReaderText'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(ScreenReaderText)

export default {
  title: 'Atoms/ScreenReaderText',
  component: ScreenReaderText,
  args: {
    children: 'Hidden text',
  },
  argTypes: {},
}

export const Default = Template.bind({})
