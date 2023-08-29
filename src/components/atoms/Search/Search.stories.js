import Search from './Search'

import {
  getTemplate,
} from '../../../helpers/storybook'

const Template = getTemplate(Search)


export default {
  title: 'Atoms/Search',
  component: Search,
  args: {
    placeholder: 'Search...'
  },
  argTypes: {
  },
}

export const Default = Template.bind({})
