import DateDivisor from './DateDivisor'

import {
  getTemplate,
} from '../../../helpers/storybook'

const Template = getTemplate(DateDivisor)


export default {
  title: 'Atoms/DateDivisor',
  component: DateDivisor,
  args: {
    children: 'Aug 3, 2023, 11:45 AM'
  },
  argTypes: {

  },
}

export const Default = Template.bind({})

