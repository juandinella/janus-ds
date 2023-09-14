import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import Header from './Header'

initStoryshots({
  storyKindRegex: /^Molecules\/Header$/,
})

const componentProps = {
  id: 'unique_id',
  text: 'Go!',
}

afterEach(cleanup)

describe('<Header />', () => {
  test('should render component correctly', () => {
    render(<Header {...componentProps} />)
    const header = screen.getByTestId(componentProps.id)
    expect(header).toBeInTheDocument()
  })

  test('should render content correctly', () => {
    render(<Header {...componentProps} />)
    const p = screen.getByText(componentProps.text)
    expect(p).toBeInTheDocument()
  })
})
