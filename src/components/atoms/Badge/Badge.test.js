import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import Badge from './Badge'

initStoryshots({
  storyKindRegex: /^Atoms\/Badge$/,
})

const componentProps = {
  id: 'unique_id',
}
afterEach(cleanup)

describe('<Badge />', () => {
  test('should render component correctly', () => {
    render(<Badge {...componentProps} />)
    const bdg = screen.getByTestId(componentProps.id)
    expect(bdg).toBeInTheDocument()
  })
})
