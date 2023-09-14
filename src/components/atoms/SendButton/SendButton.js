import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './SendButton.styles'
import ScreenReaderText from '../ScreenReaderText'

/**
 * SendButton
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSendButton = styled.button.withConfig({ shouldForwardProp })`
  ${styles}
`

const SendButton = ({
  id,
  disabled = false,
  color = '#171717',
  onClick = () => null,
}) => {
  return (
    <StyledSendButton
      id={id}
      data-testid={id}
      onClick={onClick || null}
      disabled={disabled}
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.707 1.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11a1 1 0 0 1 1.414 0Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.707 1.293a1 1 0 0 1 .237 1.037l-7 20a1 1 0 0 1-1.858.076l-3.844-8.648-8.648-3.844a1 1 0 0 1 .076-1.858l20-7a1 1 0 0 1 1.037.237ZM4.711 9.11l6.695 2.975a1 1 0 0 1 .508.508l2.975 6.695L20.37 3.63 4.711 9.11Z"
          fill={color}
        />
      </svg>
      <ScreenReaderText>Send Message</ScreenReaderText>
    </StyledSendButton>
  )
}

SendButton.displayName = 'SendButton'

SendButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
}

export default SendButton
