import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import SuggestedQuestions from './SuggestedQuestions'

initStoryshots({
  storyKindRegex: /^Molecules\/SuggestedQuestions$/,
})

let questionList = [
  {
    text: 'Question number 1',
  },
  {
    text: 'Question number 2',
  },
]
const componentProps = {
  id: 'unique_id',
  questions: [...questionList],
}

afterEach(cleanup)

describe('<SuggestedQuestions />', () => {
  test('should render component correctly', () => {
    render(<SuggestedQuestions {...componentProps} />)
    const comp = screen.getByTestId(componentProps.id)
    expect(comp).toBeInTheDocument()
  })
})
