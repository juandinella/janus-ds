import SuggestedQuestion from './SuggestedQuestion'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(SuggestedQuestion)

export default {
  title: 'Atoms/SuggestedQuestion',
  component: SuggestedQuestion,
  args: {
    text: 'What is Janus?',
  },
  argTypes: {},
}

export const Default = Template.bind({})
