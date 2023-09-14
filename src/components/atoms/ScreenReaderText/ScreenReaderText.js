import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './ScreenReaderText.styles'

/**
 * Hidden text just reachable for screen readers
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledScreenReaderText = styled.span.withConfig({ shouldForwardProp })`
  ${styles}
`

const ScreenReaderText = ({ id, children }) => {
  return (
    <StyledScreenReaderText id={id} data-testid={id}>
      {children}
    </StyledScreenReaderText>
  )
}

ScreenReaderText.displayName = 'ScreenReaderText'

ScreenReaderText.propTypes = {
  /** Component's id */
  id: PropTypes.string,
  /** Component's content */
  children: PropTypes.string.isRequired,
}

export default ScreenReaderText
