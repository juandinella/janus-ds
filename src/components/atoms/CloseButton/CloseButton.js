import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './CloseButton.styles'
import ScreenReaderText from '../ScreenReaderText'

/**
 * CloseButton
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledCloseButton = styled.button.withConfig({ shouldForwardProp })`
  ${styles}
`

const CloseButton = ({ id, onClick = () => null }) => {
  return (
    <StyledCloseButton id={id} data-testid={id} onClick={onClick || null}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="none"
      >
        <path
          fill="var(--color-neutral-500)"
          fillRule="evenodd"
          d="M13.707.293a1 1 0 010 1.414l-12 12a1 1 0 01-1.414-1.414l12-12a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
        <path
          fill="var(--color-neutral-500)"
          fillRule="evenodd"
          d="M.293.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414 1.414l-12-12a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <ScreenReaderText>Close Chat</ScreenReaderText>
    </StyledCloseButton>
  )
}

CloseButton.displayName = 'CloseButton'

CloseButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
}

export default CloseButton
