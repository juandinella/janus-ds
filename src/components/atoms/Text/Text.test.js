import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import Text from './Text'

initStoryshots({
  storyKindRegex: /^Atoms\/Text$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Go!',
}

afterEach(cleanup)

describe('<Text />', () => {
  test('should render component correctly', () => {
    render(<Text {...componentProps} />)
    const text = screen.getByTestId(componentProps.id)
    expect(text).toBeInTheDocument()
  })

  test('should render content correctly', () => {
    render(<Text {...componentProps} />)
    const p = screen.getByText(componentProps.children)
    expect(p).toBeInTheDocument()
  })

  test('should render type correctly', () => {
    render(<Text {...componentProps} type="h4" />)
    const h4 = screen.getByRole('heading', { level: 4 })
    expect(h4).toBeInTheDocument()
  })
})
