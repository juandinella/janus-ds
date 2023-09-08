import initStoryshots from '@storybook/addon-storyshots'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import DateDivisor from './DateDivisor'

initStoryshots({
  storyKindRegex: /^Atoms\/DateDivisor$/,
})

const componentProps = {
  id: 'unique_id',
  children: 'Aug 3, 2023, 11:45 AM',
}
afterEach(cleanup)

describe('<DateDivisor />', () => {
  test('should render component correctly', () => {
    render(<DateDivisor {...componentProps} />)
    const divisor = screen.getByTestId(componentProps.id)
    expect(divisor).toBeInTheDocument()
  })

  test('should render children correctly', () => {
    render(<DateDivisor {...componentProps} />)
    const childrenElement = screen.getByTestId(`${componentProps.id}-children`)
    expect(childrenElement.textContent).toEqual(componentProps.children)
  })
})
