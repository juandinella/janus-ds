import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './DateDivisor.styles'
import Text from '../Text'

/**
 * DateDivisor
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledDateDivisor = styled.div.withConfig({shouldForwardProp})`${styles}`

const DateDivisor = ({ id, children }) => {
  return (
    <StyledDateDivisor id={id} data-testid={id}>
      <Text data-testid={`${id}-children`} type='span' size='xs'>{children}</Text>
    </StyledDateDivisor>
  )
}

DateDivisor.displayName = 'DateDivisor'

DateDivisor.propTypes = {
  /** Component id */
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

DateDivisor.defaultProps = {}

export default DateDivisor
