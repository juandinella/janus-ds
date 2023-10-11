import SuggestedQuestions from './SuggestedQuestions'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(SuggestedQuestions)

let questionList = [
  {
    text: 'Question 1',
  },
  {
    text: 'Question number 2',
  },
  {
    text: 'Question number 3',
  },
  {
    text: 'Question number 4',
  },
  {
    text: 'Question number 5',
  },
  {
    text: 'Question number 6',
  },
  {
    text: 'Question number 7',
  },
  {
    text: 'Question number 8',
  },
  {
    text: 'Question number 9',
  },
  {
    text: 'Question number 10',
  },
]

export default {
  title: 'Molecules/SuggestedQuestions',
  component: SuggestedQuestions,
  args: {
    questions: [...questionList],
  },
  argTypes: {},
}

export const Default = Template.bind({})
