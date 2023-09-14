import initStoryshots from '@storybook/addon-storyshots'
import { render, cleanup, screen } from '@testing-library/react'
import React from 'react'
import ScreenReaderText from './ScreenReaderText'

initStoryshots({
  storyKindRegex: /^Atoms\/ScreenReaderText$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Go!',
}

afterEach(cleanup)

describe('<ScreenReaderText />', () => {
  test('should render component correctly', () => {
    render(<ScreenReaderText {...componentProps} />)
    const comp = screen.getByTestId(componentProps.id)
    expect(comp).toBeInTheDocument()
  })

  test('renders the content correctly', () => {
    render(<ScreenReaderText {...componentProps} />)
    const link = screen.getByTestId(componentProps.id)
    expect(link).toHaveTextContent(componentProps.children)
  })
})
