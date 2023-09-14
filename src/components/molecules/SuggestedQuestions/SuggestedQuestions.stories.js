import SuggestedQuestions from './SuggestedQuestions'

import { getTemplate } from '../../../helpers/storybook'

const Template = getTemplate(SuggestedQuestions)

let questionList = [
  {
    children: 'Question 1',
  },
  {
    children: 'Question number 2',
  },
  {
    children: 'Question number 3',
  },
  {
    children: 'Question number 4',
  },
  {
    children: 'Question number 5',
  },
  {
    children: 'Question number 6',
  },
  {
    children: 'Question number 7',
  },
  {
    children: 'Question number 8',
  },
  {
    children: 'Question number 9',
  },
  {
    children: 'Question number 10',
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
